import React, { useDebugValue, useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // const firstValue = text || "Hello World";
  // const secondtValue = text && "Hello World";
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  //  you wanna use ternary operators because if/else does not return values
  //    doing these does therefore has to be used.
  return (
    <>
      {/* <h1> {firstValue}</h1>
      <h1> value: {secondtValue}</h1> */}

      {/* short circuit OR - 
      If first value is true -> returns text value
      if first value is false -> returns "John doe" */}
      <h1>{text || "John Doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        {" "}
        toggle error{" "}
      </button>
      {isError && <h1> Error</h1>}
      {isError ? (
        <p> there is an error... </p>
      ) : (
        <div>
          <h2> There's no errors!</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
