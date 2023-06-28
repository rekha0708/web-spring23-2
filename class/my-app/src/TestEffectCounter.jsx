import React, { useCallback, useEffect, useState } from "react";

const TestEffectCounter = () => {
  const [counter, setCounter] = useState(0);

  //const unmemoized = () => {
   // console.log("UNMEMOIZED FUNCTION");
  //};

  const memoized = useCallback(() => {
    console.log("I am memoized.");
  }, []);

  useEffect(() => {
    console.log("== component mounted, useEffect runs ==");

    // Calling the unmemoized/memoized function (dependency) here
    // unmemoized();
    memoized();

    return () => {
      console.log("== component unmounted, cleanup function called ==");
      // Add cleanup code here
    };
  }, [memoized]);

  return (
    <div>
      <h1>TestEffectCounter</h1>

      <h2>{counter}</h2>

      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Increment
      </button>
    </div>
  );
};

export default TestEffectCounter;
