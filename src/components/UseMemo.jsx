import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  // const simpleFu = () => {
  //   console.log("I am rendering..");
  //   let x = 23403030 * 12300;
  //   return x;
  // };
  const simpleFu = useMemo(() => {
    console.log("I am rendering..");
    let x = 23403030 * 12300;
    return x;
  },[]);
  simpleFu;
  return (
    <div className="flex flex-col gap-4">
      <h1>This is Explain the useMemo Hook</h1>
      <button
        className="px-4 py-2 bg-red-500 rounded-xl text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <p>count Value : {count}</p>
    </div>
  );
};

export default UseMemo;
