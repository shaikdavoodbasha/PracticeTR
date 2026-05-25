import React, { useContext } from "react";
import { MainContext } from "../context/AppContext";

const ConditionalRendering = ({ sendToParent }) => {
  const { van, setVan } = useContext(MainContext);
  const action = () => {
    sendToParent("I am from ChildComponent");
  };
  return van ? (
    <div>
      <h1>Hii I am Conditionaly Render</h1>
      <button
        className="px-3 py-2 bg-black text-white rounded-xl"
        onClick={action}
      >
        ClickMe
      </button>
    </div>
  ) : (
    "No Component Present"
  );
};

export default ConditionalRendering;
