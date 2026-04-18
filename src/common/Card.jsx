import React from "react";

const Card = ({id,title,description,category}) => {
  return (
    <div
      key={id}
      className="border rounded-lg flex flex-col justify-start items-center px-3 py-2"
    >
      <h1 className="text-xl text-red-600">{title}</h1>
      <p className="text-sm">{description}</p>
      <p className="text-sm">{category}</p>
    </div>
  );
};

export default Card;
