import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

// useEffect is good for "sideEffects"
// this means any work outside of the component,
// data fetching, listening for events, signing up for subscriptions,etc...

// i.e changing the title

// conditionals can't be used in the traditional sense.
// has to be inside the "useEffect"
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // stuff here will run after every render.
  useEffect(() => {
    console.log("Call useEffect");
    if (value >= 1) document.title = `New Messages (${value})`;
  }, [value]);
  // called 'dependency array'
  // with the array at the end of the function call, it will only run once
  // with [value], it will run everytime [value] is changed
  return (
    <>
      <h1> {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me!
      </button>
    </>
  );
};

export default UseEffectBasics;
