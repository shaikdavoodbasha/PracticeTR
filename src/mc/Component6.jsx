import React, { useState } from "react";

const Component6 = () => {
  const productsData = [
    { id: 1, name: "iPhone", category: "Mobile" },
    { id: 2, name: "Samsung TV", category: "Electronics" },
    { id: 3, name: "MacBook", category: "Laptop" },
    { id: 4, name: "Dell Laptop", category: "Laptop" },
    { id: 5, name: "OnePlus", category: "Mobile" },
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const categories = ["Mobile", "Laptop", "Electronics"];
  const handlechange = (category) => {
    if (selectedItems.includes(category)) {
      setSelectedItems(selectedItems.filter((item) => item != category));
    } else {
      setSelectedItems([...selectedItems, category]);
    }
  };
  console.log(selectedItems);
  const filetedData =
    selectedItems.length === 0
      ? productsData
      : productsData.filter((product) =>
          selectedItems.includes(product.category),
        );
  return (
    <div>
      {categories.map((cat, index) => {
        return (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                value={selectedItems.includes(cat)}
                onChange={() => handlechange(cat)}
              />
              {cat}
            </label>
          </div>
        );
      })}
      <div>
        {filetedData.map(({ name, category, id }) => {
          return (
            <div key={id} className="flex flex-col gap-4">
              <h1>{name}</h1>
              <p>{category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Component6;
