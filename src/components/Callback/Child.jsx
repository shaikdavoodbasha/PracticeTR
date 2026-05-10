import React from "react";

const Child = React.memo(({ viewing, data }) => {
  console.log("I am child and I am rendering..");

  return (
    <div>
      <p>Child Data: {data}</p>
      <button onClick={viewing}>Click Child</button>
    </div>
  );
});

export default Child;