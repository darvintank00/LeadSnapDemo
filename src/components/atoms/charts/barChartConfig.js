import { getAllGradientsInArray } from "./utils";

export const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    // "Jul",
    // "Aug",
    // "Sep",
    // "Oct",
    // "Nov",
    // "Dec",
  ],
  datasets: [
    {
      label: "Data One",
      backgroundColor(context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return;
        }
        let gradient, width, height, gradient2;
        const chartWidth = chartArea.right - chartArea.left;
        const chartHeight = chartArea.bottom - chartArea.top;

        if (width !== chartWidth || height !== chartHeight) {
          return getAllGradientsInArray(ctx, chartArea);
        }
      },
      data: [],
      barThickness: 12,
      borderRadius: 5,
    },
  ],
};

export const options = {
  responsive: true,
  aspectRatio: 1,
  maintainAspectRatio: true,
  scales: {
    y: {
      max: parseInt(Math.max(...data.datasets[0].data)),
      min: 0,
      border: {
        display: false,
      },
      grid: {
        borderWidth: 0,
        tickWidth: 0,
      },
      ticks: {
        padding: 20,
        borderWidth: 0,
        callback: function (value, index, ticks) {
          return value + "%";
        },
        font: {
          family: "'Montserrat'",
          weight: 400,
        },
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
        tickWidth: 0,
      },
      ticks: {
        padding: 20,
        drawTicks: false,
        borderWidth: 0,
        font: {
          size: 12,
          family: "'Montserrat'",
          weight: 800,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};
