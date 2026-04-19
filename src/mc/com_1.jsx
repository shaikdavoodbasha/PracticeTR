import React, { useState } from "react";

const Component_1 = () => {
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(false);
  const [name1, setName1] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <button
        className="px-3 py-1 bg-red-700 text-white rounded-xl"
        onClick={() => setToggle(!toggle)}
      >
        Click Me
      </button>
      {toggle ? (
        <div>
          <p>Hey I am present Here</p>
        </div>
      ) : (
        "Nothing is present"
      )}

      <div className="flex gap-4">
        <input
          type={`${show ? "text" : "password"}`}
          className="border border-red-700 px-2 py-1 "
          placeholder="Enter Your password"
        />
        <button
          className="p-2 bg-red-600 text-white rounded-lg"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          className="border border-red-700 px-2 py-1 "
          placeholder="Enter Your Name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <p>{name1}</p>
      </div>
    </div>
  );
};

export default Component_1;
