export const barChartcolorSet = [
  {
    top: "#e5e5e5",
    bottom: "#c7c7c7",
  },
  {
    bottom: "#ce335f",
    top: "#f25b86",
  },
  {
    bottom: "#e97a17",
    top: "#eb974c",
  },
  {
    bottom: "#8ec320",
    top: "#15a0d3",
  },
];

export const doughnutChartColor = {
  top: "#8ec320",
  bottom: "#15a0d3",
};

export function getAllGradientsInArray(ctx, chartArea) {
  let array = [];

  barChartcolorSet.forEach((color) => {
    array.push(getBarGradient(ctx, chartArea, color));
  });
  return array;
}

export function getBarGradient(ctx, chartArea, color) {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, color.top);
    gradient.addColorStop(1, color.bottom);
  }

  return gradient;
}

export function getDoughnutGradient(context, color) {
//   console.log(context.chart.height);
  const gradient = context.chart.ctx.createLinearGradient(
    0,
    0,
    0,
    context.chart.height
  );
  gradient.addColorStop(0, color.top);
  gradient.addColorStop(1, color.bottom);

  return gradient;
}
