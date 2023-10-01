import { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";
import "../styles/chart.css";

type DailyStars = {
  date: Date;
  stars: number;
};

type Series = {
  label: string;
  data: DailyStars[];
};

const data: Series[] = [
  {
    label: "React Charts",
    data: [
      {
        date: new Date(),
        stars: 202123,
      },
      // Add more data points here if needed
    ],
  },
  {
    label: "React Query",
    data: [
      {
        date: new Date(),
        stars: 10234230,
      },
      // Add more data points here if needed
    ],
  },
];

function RenderChart() {
  const primaryAxis = useMemo(
    () => ({
      getValue: (datum: DailyStars) => datum.date,
      // Add any other primary axis configuration here if needed
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum: DailyStars) => datum.stars,
        // Add any other secondary axis configuration here if needed
      },
    ],
    []
  );

  return (
    <div
      className="chartContainer
    "
      style={{ width: "70%", height: "50%" }}
    >
      <Chart options={{ data, primaryAxis, secondaryAxes }} />
    </div>
  );
}

export default RenderChart;
