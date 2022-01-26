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
        .attr("id", "naam")
        .text("Namen:")
        .selectAll(".nameDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .attr("id", "woordenNaam")
        .text(function (d) {
          return d.prs_naam;
        })
        .exit();

      div
        .append("div")
        .attr("className", "geslachtDiv infoDiv")
        .attr("id", "geslacht")
        .text("Geslacht:")
        .selectAll(".geslachtDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .attr("id", "woordenNaam")
        .text(function (d) {
          return d.prs_geslacht;
        })
        .exit();

      div
        .append("div")
        .attr("className", "leeftijdDiv infoDiv")
        .attr("id", "leeftijd")
        .text("leeftijd:")
        .selectAll(".leeftijdDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .attr("id", "woordenNaam")
        .text(function (d) {
          return d.prs_leeftijd;
        });

      div
        .append("div")
        .attr("className", "ingeschrevenDiv infoDiv")
        .attr("id", "inschrijving")
        .text("Ingeschreven:")
        .selectAll(".ingeschrevenDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .attr("id", "woordenNaam")
        .text(function (d) {
          return d.ove_datum_inschrijving;
        })
        .exit();

      div
        .append("div")
        .attr("className", "eigenaarDiv infoDivLast")
        .attr("id", "eigenaar")
        .text("eigenaar:")
        .selectAll(".eigenaarDiv")
        .data(text)
        .enter()
        .append("div")
        .attr("className", "mainText")
        .attr("id", "woordenNaam")
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
      className="pt-32 w-full dataDiv"
      style={{
        height: "100%",
        marginRight: "0px",
        marginLeft: "0px",
        display: "flex",
      }}
    >
      <input
        className="w-1/3 rounded-lg absolute top-28 bg-project-donker border-2 border-project-secondary placeholder:text-project-secondary placeholder:text-2xl placeholder:font-bold px-4 py-2"
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Vul hier een naam in!"
      />
      <input
        type="checkbox"
        name="f1"
        id="checkboxAZ"
        className="checkbox check1 hidden"
        onChange={onChange}
        checked={checked}
      />
      <label
        className="absolute top-44 px-2 rounded-lg bg-project-button"
        htmlFor="checkboxAZ"
      >
        A - Z
      </label>
    </div>
  );
};

export default DataBody;
