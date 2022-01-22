import React, { createContext, useState, useEffect } from "react";
import * as d3 from "d3";

const KanyeContext = React.createContext(null);

export const KanyeProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [text, setText] = useState(null);
  const [searched, setSearched] = useState(null);

  useEffect(() => {
    d3.json("datashort.json").then((uitkomst) => {
      const parseData = JSON.parse(JSON.stringify(uitkomst));
      setData(parseData);
    });
  }, []);

  useEffect(() => {
    console.log("data and checked:", data, searched);
    if (!data) return;
    setText(
      data.NT00461_SLAVENREGISTERS_NIEUWE_.filter((d) => {
        let input =
          document.getElementById("searchBar") &&
          document.getElementById("searchBar").value
            ? document.getElementById("searchBar").value
            : "";
        return d.prs_naam.toLowerCase().indexOf(input.toLowerCase()) !== -1;
      }).map((d) => ({ ...d }))
    );
  }, [data, searched]);

  console.log("text:", text);

  if (!data) return null;

  return (
    <KanyeContext.Provider value={{ text, searched, setSearched }}>
      {" "}
      {children}{" "}
    </KanyeContext.Provider>
  );
};

export default KanyeContext;
