import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Grid } from "@mui/material";
import data from "../../grades_ece_ntua_john.json";
import { useEffect } from "react";
const Chart = (props) => {
  // const {data } = props
  const options = {
    chart: {
      type: "areaspline",
    },
    title: {
      text: "Grades Ece Ntua [ JOHN ]*",
    },
    subtitle: {
      text: "* See only courses with grade",
      align: "right",
      verticalAlign: "bottom",
    },
    legend: {
      // labelFormat: "Grades",
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
    },
    xAxis: {
      title: {
        text: "Number of grades",
      },
    },
    yAxis: {
      max: 10,
      min: 0,
      title: {
        text: "GRADE",
      },
    },
    plotOptions: {
      area: {
        fillOpacity: 0.5,
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Grades",
        data: data
          .filter((dataItem) => !isNaN(dataItem.Grade))
          .map((dataItem) => dataItem.Grade),
        step: "center",
        color: "#808080",
      },
    ],
  };
  return (
    <>
      {/* <Grid container > */}
      <HighchartsReact highcharts={Highcharts} options={options} />
      {/* </Grid> */}
    </>
  );
};

export default Chart;
