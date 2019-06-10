import React, { useState } from "react";
import ReactDOM from "react-dom";
import Typist from "react-typist";
import Score from "./Score";
import story from "./story";

import "./styles.css";

function App() {
  const [data, setData] = useState(story[1]);
  const [points, setPoints] = useState(0);
  const [flipAnim, setFlipAnim] = useState(true);
  const handleClick = data => {
    setData(story[data]);
    setFlipAnim(flipAnim ? false : true);
    if (story[data].teal) {
      setPoints(points => points + 1);
    }
  };

  return (
    <div className="App">
      <Score className="box" pose={flipAnim ? "pose1" : "pose2"}>
        {points.toString()}
      </Score>
      <Typist key={data.text}>
        <span>{data.text}</span>
        <p />
        <button onClick={() => handleClick(data.button1 || "end")}>next</button>
      </Typist>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
