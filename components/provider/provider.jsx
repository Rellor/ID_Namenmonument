import React, { createContext, useState, useEffect } from "react";
import * as d3 from "d3";

const KanyeContext = React.createContext(null);

export const KanyeProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    d3.json("data.json").then((uitkomst) => {
      const parseData = JSON.parse(JSON.stringify(uitkomst));
      setData(parseData);
    });
  }, []);

  useEffect(() => {
    if (!data) return;
    setText(data.NT00461_SLAVENREGISTERS_NIEUWE_.map((d) => ({ ...d })));
  }, [data]);

  console.log("text:", text);

  if (!data) return null;

  return (
    <KanyeContext.Provider value={{ text }}> {children} </KanyeContext.Provider>
  );
};

export default KanyeContext;
