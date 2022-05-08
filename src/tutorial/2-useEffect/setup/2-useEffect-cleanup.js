import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // everytime you use the useEffect you want to clean it up
    // you can do so with the remo
    return () => {
      console.log("cleanup!!!!");
      window.removeEventListener("resize", checkSize);
    };
    // can cause memory leak.
  });

  return (
    <>
      <h1> window</h1>
      <h2> {size}px </h2>
    </>
  );
};

export default UseEffectCleanup;
