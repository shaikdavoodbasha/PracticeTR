import React, { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    fname: "",
    femail: "",
    fnumber: "",
  });
  const changing = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [fullData, setFullData] = useState([]);
  const submitting = (e) => {
    e.preventDefault();
    setFullData([...fullData, formData]);
    console.log(fullData)
  };
  return (
    <div>
      <form onSubmit={submitting} className="flex flex-col gap-4">
        <div>
          <label>Your Name: </label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={changing}
          />
        </div>
        <div>
          <label>Your Email: </label>
          <input
            type="text"
            name="femail"
            value={formData.femail}
            onChange={changing}
          />
        </div>
        <div>
          <label>Your Number: </label>
          <input
            type="text"
            name="fnumber"
            value={formData.fnumber}
            onChange={changing}
          />
        </div>
        <button className="px-4 py-2 bg-red-700 text-white rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
