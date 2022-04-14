import React, { useState } from "react";

// the title has to start with capitali letter i.e U
const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // the [] can be named anything, its named text here.
  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    // acts as a toggle, if the button gets pressed again it will
    // return back the original title.
    if (text == "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text} </h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
