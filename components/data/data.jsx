import React, { createContext, useState, useEffect } from "react";
import KanyeContext from "../provider/provider";
import useD3 from "../../hooks/useD3";

const DataBody = () => {
  const { text, searched, setSearched, setChecked, checked } =
    React.useContext(KanyeContext);

  const ref = useD3(
    (div) => {
      if (!text) return;

      div.selectAll("div").remove();

      div
        .append("div")
        .attr("className", "nameDiv infoDiv")
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
        .attr("className", "geslachtDiv infoDiv")
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
        .attr("className", "leeftijdDiv infoDiv")
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
        .attr("className", "ingeschrevenDiv infoDiv")
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
        .attr("className", "eigenaarDiv infoDivLast")
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

  const onChange = () => {
    setChecked(!checked);
  };

  if (!text) return null;
  return (
    <div
      ref={ref}
      className="pt-32"
      style={{
        height: 500,
        marginRight: "0px",
        marginLeft: "0px",
        display: "flex",
      }}
    >
      <input
        className="absolute top-36"
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Vul hier een naam in!"
      />
      <input
        type="checkbox"
        name="f1"
        className="checkbox check1"
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
};

export default DataBody;
