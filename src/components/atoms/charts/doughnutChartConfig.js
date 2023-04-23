import { getDoughnutGradient, doughnutChartColor } from "./utils";

export const data = 
// {
//   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [300, 50, 100],
//       backgroundColor: [
//         "rgb(255, 99, 132)",
//         "rgb(54, 162, 235)",
//         "rgb(255, 205, 86)",
//       ],
//       hoverOffset: 4,
//     },
//   ],
// };
{
  labels: ["VueJs", "EmberJs"],
  datasets: [
    {
      backgroundColor(context) {
        const chart = context.chart;
        // console.log(context.chart);
        const { ctx, chartArea } = chart;
        // console.log(chart, chartArea);
        // return getDoughnutGradient(ctx, {}, doughnutChartColor);
        // console.log(getDoughnutGradient(context, doughnutChartColor));
        return [
          getDoughnutGradient(context, doughnutChartColor),
          "#c7c7c7",
        ];
      },
      data: [80, 20],
    },
  ],
};

export const options = {
  cutout: "70%",
  responsive: true,
  aspectRatio: 1,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false
    },
  },
};
