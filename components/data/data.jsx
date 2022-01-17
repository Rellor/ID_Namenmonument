import React, { createContext, useState, useEffect } from "react";
import KanyeContext from "../provider/provider";
import useD3 from "../../hooks/useD3";

const DataBody = () => {
  const { data } = React.useContext(KanyeContext);

  const ref = useD3((text) => {
    if (!data) return;

    text.append("text").attr("class", "myLabel"); //easy to style with CSS
  });

  if (!data) return null;
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
