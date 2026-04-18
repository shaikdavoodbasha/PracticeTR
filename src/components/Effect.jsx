import React, { useEffect, useState } from "react";
import ApiCard from "../common/ApiCard";
import axios from "axios";

const Effect = () => {
  const [data, setData] = useState([]);
  const apiData = async ()=>{
    const one = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const fData = await setData(one.data)
  }
  useEffect(() => {
    apiData()
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((res) => setData(res))
    //   .catch((err) => console.log(err));
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      {data
        ? data.map(({ title, body, id }) => {
            return <ApiCard title={title} body={body} id={id} />;
          })
        : "No data found"}
    </div>
  );
};

export default Effect;
