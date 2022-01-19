import React, { createContext, useState, useEffect } from "react";
import KanyeContext from "../provider/provider";
import useD3 from "../../hooks/useD3";

const DataBody = () => {
  const { text, searched, setSearched } = React.useContext(KanyeContext);

  const ref = useD3(
    (div) => {
      if (!text) return;

      div.selectAll("div").remove();

      div
        .append("div")
        .attr("class", "nameDiv infoDiv")
        .text("Namen:")
        .selectAll(".nameDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .text(function (d) {
          return d.prs_naam;
        })
        .exit();

      div
        .append("div")
        .attr("class", "geslachtDiv infoDiv")
        .text("Geslacht:")
        .selectAll(".geslachtDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .text(function (d) {
          return d.prs_geslacht;
        })
        .exit();

      div
        .append("div")
        .attr("class", "leeftijdDiv infoDiv")
        .text("leeftijd:")
        .selectAll(".leeftijdDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .text(function (d) {
          return d.prs_leeftijd;
        });

      div
        .append("div")
        .attr("class", "ingeschrevenDiv infoDiv")
        .text("Ingeschreven:")
        .selectAll(".ingeschrevenDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .text(function (d) {
          return d.ove_datum_inschrijving;
        })
        .exit();

      div
        .append("div")
        .attr("class", "eigenaarDiv infoDivLast")
        .text("eigenaar:")
        .selectAll(".eigenaarDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .text(function (d) {
          return d.ove_eigenaar;
        })
        .exit();

      div.selectAll("#searchBar").on("input", searchFunction);

      function searchFunction() {
        console.log("input veranderd");
        console.log(this.value);
        setSearched(!searched);
        //test voor font size
        // .selectAll("div")
        // .select("div")
        // .style("font-size", this.value + "px");
      }
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
    >
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Vul hier een naam in!"
      />
    </div>
  );
};

export default DataBody;
