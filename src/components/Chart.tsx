import { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";

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
    ],
  },

  {
    label: "React Query",

    data: [
      {
        date: new Date(),

        stars: 10234230,
      },

      // ...
    ],
  },
];

function RenderChart() {
  const primaryAxis = useMemo(
    (): AxisOptions<DailyStars> => ({
      getValue: (datum) => datum.date,
    }),

    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<DailyStars>[] => [
      {
        getValue: (datum) => datum.stars,
      },
    ],

    []
  );
  return (
    <div>
      <Chart
        options={{
          data,

          primaryAxis,

          secondaryAxes,
        }}
      />
    </div>
  );
}

export default RenderChart;
