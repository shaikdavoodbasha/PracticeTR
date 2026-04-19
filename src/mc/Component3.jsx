import React, { useState } from "react";
import { cardData } from "../data/cardata";

const Component3 = () => {
  // const[data,setData] = useState([])
  //   const arr = ['one','two','three','four','five','six'];
  const [item, setItem] = useState("");
  const [fullData, setFullData] = useState([]);
  const addingData = () => {
    setFullData([...fullData, item]);
  };
  const deleting = (idn) => {
    const updatedTaks = fullData.filter((_, index) => idn != index);
    setFullData(updatedTaks);
  };
  const [selected, setSelected] = useState([]);
  const options = ["One", "Two", "Three", "Four", "Five"];
  const handleOption = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((items) => items != item));
    } else {
      setSelected([...selected, item]);
    }
  };
  return (
    <div>
      {/* <div>
        {cardData
          ? cardData.map(({ title, description, category }) => {
              return (
                <div className="flex flex-col gap-3">
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <p>{category}</p>
                </div>
              );
            })
          : "No Data Found"}
      </div> */}
      <div>
        <div className="flex gap-3 items-center">
          <input
            className="px-3 py-2 border border-red-500 rounded-md"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            className="px-2 py-1 bg-red-600 text-white rounded-lg"
            onClick={addingData}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-4  mt-3">
          {fullData
            ? fullData.map((item, index) => {
                return (
                  <div className="flex  gap-3 items-center" key={index}>
                    <p>{item}</p>
                    <button
                      className="px-3 py-1 bg-green-600 text-white rounded-lg"
                      onClick={() => {
                        deleting(index);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : "There is not data"}
        </div>
      </div>
      <div>
        {options.map((item, index) => {
          return (
            <div>
              <label>{item}</label>
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => handleOption(item)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Component3;
