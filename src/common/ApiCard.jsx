import React from "react";

const ApiCard = ({ title, body }) => {
  return (
    <div className="border rounded-2xl px-4 py-2">
      <h1 className="text-red-700 text-2xl">{title}</h1>
      <p className="text-blue-600">{body}</p>
    </div>
  );
};

export default ApiCard;
