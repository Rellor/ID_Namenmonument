import React, { createContext, useState, useEffect } from "react";
import * as d3 from "d3";

const KanyeContext = React.createContext(null);

export const KanyeProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [words, setWords] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    d3.json("data.json").then((uitkomst) => {
      const myData = uitkomst;
      const testData = JSON.parse(JSON.stringify(myData));
      const testData2 = testData.NT00461_SLAVENREGISTERS_NIEUWE_[10].prs_naam;
      setData(testData);

      console.log("Data:", testData2);
    });
  }, []);
  return (
    <KanyeContext.Provider value={{ data }}> {children} </KanyeContext.Provider>
  );
};

export default KanyeContext;
