import React, { useRef, useState } from 'react';

const Reffing = () => {
  const countRef = useRef(0);
  const [stateCount, setStateCount] = useState(0);

  const increaseRef = () => {
    countRef.current += 1;
    console.log("Ref Count:", countRef.current);
  };

  const increaseState = () => {
    setStateCount(stateCount + 1);
  };

  return (
    <div>
      <h3>State Count: {stateCount}</h3>
      <button onClick={increaseState}>Increase State</button>
      <button onClick={increaseRef}>Increase Ref</button>
    </div>
  );
};

export default Reffing;