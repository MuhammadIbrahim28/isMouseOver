import React, { useState } from "react";

function App() {
  const [headingtext, setHeadingText] = useState("Ibrahim");
  const [isMouseOver, setMouseOver] = useState(false);
  function handleclick() {
    setHeadingText("Yes Ibrahim");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOUt() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingtext}</h1>
      <input type="text" placeholder="What's your name" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleclick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOUt}
      >
        Submit
      </button>
    </div>
  );
}
export default App;
