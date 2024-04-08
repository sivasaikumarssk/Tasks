import React from "react";
import ReactApexChart from "react-apexcharts";
class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "No. of days Present",
          data: [24, 15, 17, 23, 20, 22, 23, 16, 18, 22, 23, 27],
        },
        {
          name: "No. of days Absent",
          data: [1, 1, 2, 5, 2, 1, 1, 4, 5, 2, 3, 5],
        },
        {
          name: "Holidays",
          data: [3, 1, 3, 2, 5, 4, 2, 3, 1, 0, 1, 1],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          title: {
            text: "days",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " days";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
            width={"150%"}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
export default BarChart;
