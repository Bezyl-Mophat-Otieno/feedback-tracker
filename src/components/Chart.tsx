import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const [data, setData] = useState<any>([]);
  const lessonRatings = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/rating/ratings"
    );
    const data = response.data.ratings;
    return data;
  };

  const lessonRatingsQuery = useQuery({
    queryKey: ["lesson_ratings"],
    queryFn: lessonRatings,
  });

  // if (lessonRatingsQuery.isLoading) console.log("Loading...");
  // if (lessonRatingsQuery.isError) console.log("Error");
  // if (lessonRatingsQuery.isSuccess) console.log("Success");
  // if (lessonRatingsQuery.data) console.log(lessonRatingsQuery.data);

  useEffect(() => {
    if (lessonRatingsQuery.isSuccess) {
      setData(lessonRatingsQuery.data);
    }
  }, [lessonRatingsQuery.data]);

  // The data returned from the query should be mapped into an array of objects where Lesson represents lessonTittle and RAting represents average rating
  type Rating = {
    Tittle: string;
    Rating: number;
  };

  const ratings: Rating[] = [];
  data.map((item: any) => {
    ratings.push({ Tittle: item.lessonTittle, Rating: item.averageRating });
  });
  console.log(ratings);

  return (
    <>
      <ResponsiveContainer width="50%" height="50%">
        <LineChart
          width={500}
          height={300}
          data={ratings}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Tittle" />
          <YAxis dataKey="Rating" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Rating"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Chart;
