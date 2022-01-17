const bigScreenBlockStyle = {
  background: "white",
  height: "60vh",
  width: "52vw",
  margin: "0",
  display: "flex",
  marginTop: "5%",
  overflow: "hidden",
};

const pilaarStyle = {
  background: "black",
  height: "60vh",
  width: "16vw",
  borderTopRightRadius: "50% 30%",
  borderTopLeftRadius: "50% 30%",
  display: "grid",
  gridTemplateColumns: "repeat(155, 1px [col-start])",
  gridTemplateRows: "repeat(452, 1px [col-start])",
};

const pilaarMiddleStyle = {
  background: "black",
  height: "60vh",
  width: "16vw",
  borderTopRightRadius: "50% 30%",
  borderTopLeftRadius: "50% 30%",
  margin: "0px 1.6vw",
  display: "grid",
  gridTemplateColumns: "repeat(155, 1px [col-start])",
  gridTemplateRows: "repeat(452, 1px [col-start])",
};

const test = {
  gridColumn: "66",
  gridRow: "300",
  background: "red",
};

// const test = {
//   gridColumn: "66 / 135",
//   gridRow: "300 / 250",
//   background: "red",
// };

const smallScreenBlockStyle = {
  background: "white",
  height: "25vh",
  width: "52vw",
  margin: "15px auto 0px auto",
  display: "flex",
};

const smallScreenStyle = {
  background: "grey",
  height: "25vh",
  width: "16vw",
};

const smallScreenMiddleStyle = {
  background: "grey",
  height: "25vh",
  width: "16vw",
  margin: "0px 1.6vw",
};

const HomeBody = () => (
  <div className="App">
    <div style={bigScreenBlockStyle}>
      <div style={pilaarStyle}>
        <div style={test}></div>
      </div>
      <div style={pilaarMiddleStyle}></div>
      <div style={pilaarStyle}></div>
    </div>

    <div style={smallScreenBlockStyle}>
      <div style={smallScreenStyle}></div>
      <div style={smallScreenMiddleStyle}></div>
      <div style={smallScreenStyle}></div>
    </div>
  </div>
);

export default HomeBody;
