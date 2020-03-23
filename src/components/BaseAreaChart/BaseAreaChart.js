import React from "react";
import { Line } from "react-chartjs-2";
import { money } from "../../utils/formatters";

const BaseAreaChart = ({ data, labels }) => {
  const options = {
    responsive: true,
    legend: {
      display: false
    },
    tooltips: {
      mode: "label",
      displayColors: false,
      callbacks: {
        label: function(tooltipItem) {
          const label = money(tooltipItem.yLabel);
          return label;
        }
      }
    },
    elements: {
      line: {
        fill: false
      }
    }
  };

  const config = {
    labels,
    datasets: [
      {
        fill: "start",
        lineTension: 0.1,
        backgroundColor: "#75daad",
        borderColor: "#216353",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        data
      }
    ]
  };
  return (
    <div>
      <Line data={config} options={options} />
    </div>
  );
};

export default BaseAreaChart;
