import React, { useState } from "react";

const Component2 = () => {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    fname: "",
    fmail: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [fullData, setFullData] = useState([]);
  const formSubmitting = (e) => {
    e.preventDefault();
    setFullData([...fullData, formData]);
    console.log(fullData)
    setFormData({
      fname: "",
      fmail: "",
    });
  };
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex flex-col gap-3">
        <p>Clicks : {count}</p>
        {count != 5 ? (
          <button
            className="px-3 py-1 bg-red-500 text-white rounded-lg"
            onClick={() => setCount(count + 1)}
          >
            Counter
          </button>
        ) : (
          ""
        )}
      </div>
      <div>
        <form className="flex flex-col gap-4 items-center" onSubmit={formSubmitting}>
          <div className="flex gap-3 items-center">
            <label>Enter Your Name: </label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="px-2 py-1 border border-red-500 rounded-lg"
              placeholder="Enter your name."
            />
          </div>
          <div className="flex gap-3 items-center">
            <label>Enter Your Email: </label>
            <input
              type="text"
              name="fmail"
              value={formData.fmail}
              onChange={handleChange}
              className="px-2 py-1 border border-red-500 rounded-lg"
              placeholder="Enter your Email."
            />
          </div>
          <button className="px-3 py-1 bg-red-600 text-white rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Component2;
