import React, { useEffect, useState } from "react";

function FormattedDate({ date }) {
  console.log("functional component rendering");

  const time = date.toLocaleTimeString();

  return <h2>It's {time}</h2>;
}

function Clock1() {
  console.log("Clock1 rendering");

  const [date, setDate] = useState(new Date());
  const [counter, setCounter] = useState(0);

  const tick = () => {
    const newDate = new Date();
    setDate(newDate);
  };

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      tick();
    }, 1000);
    return () => {     
      clearInterval(timerID);
    };
  }, []);

  console.log("clock state", { date, counter });

  return (
    <div>
      <h1>Hello, world!</h1>
      <FormattedDate date={date} />
      <div>Counter: {counter}</div>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
}

export default Clock1;
