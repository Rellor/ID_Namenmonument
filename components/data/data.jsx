import React, { createContext, useState, useEffect } from "react";
import KanyeContext from "../provider/provider";
import useD3 from "../../hooks/useD3";

const DataBody = () => {
  const { text } = React.useContext(KanyeContext);

  const ref = useD3(
    (div) => {
      if (!text) return;
      div
        .selectAll("text")
        .data(text)
        .enter()
        .append("text")
        .style("fill", "black")
        .attr("class", "mainText")
        .text(function (d) {
          return d.prs_naam;
        });
    },
    [text]
  );

  if (!text) return null;
  return (
    <div
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    ></div>
  );
};

export default DataBody;
