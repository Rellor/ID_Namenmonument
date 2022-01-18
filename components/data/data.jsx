import React, { createContext, useState, useEffect } from "react";
import KanyeContext from "../provider/provider";
import useD3 from "../../hooks/useD3";

const DataBody = () => {
  const { text } = React.useContext(KanyeContext);

  const ref = useD3(
    (div) => {
      if (!text) return;
      div
        .append("div")
        .attr("id", "nameDiv")
        .text("Namen:")
        .selectAll("#nameDiv")
        .data(text)
        .enter()
        .append("div")
        .style("fill", "black")
        .attr("class", "mainText")
        .text(function (d) {
          return d.prs_naam;
        });

      div
        .append("div")
        .attr("id", "geslachtDiv")
        .text("Geslacht:")
        .selectAll("#geslachtDiv")
        .data(text)
        .enter()
        .append("div")
        .style("fill", "black")
        .attr("class", "mainText")
        .text(function (d) {
          return d.prs_geslacht;
        });

      div
        .append("div")
        .attr("id", "leeftijdDiv")
        .text("Ingeschreven:")
        .selectAll("#leeftijdDiv")
        .data(text)
        .enter()
        .append("div")
        .style("fill", "black")
        .attr("class", "mainText")
        .text(function (d) {
          return d.prs_leeftijd;
        });

      div
        .append("div")
        .attr("id", "ingeschrevenDiv")
        .text("Ingeschreven:")
        .selectAll("#ingeschrevenDiv")
        .data(text)
        .enter()
        .append("div")
        .style("fill", "black")
        .attr("class", "mainText")
        .text(function (d) {
          return d.ove_datum_inschrijving;
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
        marginRight: "0px",
        marginLeft: "0px",
        display: "flex",
      }}
    ></div>
  );
};

export default DataBody;
