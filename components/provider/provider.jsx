import React, { createContext, useState, useEffect } from "react";
import * as d3 from "d3";

const KanyeContext = React.createContext(null);

export const KanyeProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [text, setText] = useState(null);
  const [searched, setSearched] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    d3.json("datashort.json").then((uitkomst) => {
      const parseData = JSON.parse(JSON.stringify(uitkomst));
      setData(parseData);
    });
  }, []);

  useEffect(() => {
    if (!data) return;
    setText(
      data.NT00461_SLAVENREGISTERS_NIEUWE_.sort((a, b) =>
        checked ? a.prs_naam.localeCompare(b.prs_naam) : true
      )
        .filter((d) => {
          let output = `${d.prs_naam} ${d.ove_eigenaar} ${d.ove_datum_inschrijving} ${d.ove_eigenaar} ${d.prs_leeftijd}`;
          console.log(output);
          let input =
            document.getElementById("searchBar") &&
            document.getElementById("searchBar").value
              ? document.getElementById("searchBar").value
              : "";
          return output.toLowerCase().indexOf(input.toLowerCase()) !== -1;
        })
        .map((d) => ({ ...d }))
    );
  }, [data, searched, checked]);

  if (!data) return null;

  return (
    <KanyeContext.Provider value={{ text, searched, setSearched, setChecked }}>
      {" "}
      {children}{" "}
    </KanyeContext.Provider>
  );
};

export default KanyeContext;
