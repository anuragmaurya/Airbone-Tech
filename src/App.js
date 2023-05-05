import logo from "./logo.svg";
import "./App.css";
import Interface from "./UI/Interface";
import { Routes, Route } from "react-router-dom";
import Description from "./UI/Description";
import { useState,useEffect } from "react";
import axios from "axios";

function App() {

  const [data, setdata] = useState([]);



  const response = async () => {
    await axios.get(`https://api.tvmaze.com/search/shows?q=all`)
      .then((response) => {
        setdata(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    response();
  }, []);
  return (
    <div className="top-0 left-0 bg-slate-200 h-full pb-10">
      <div className="flex justify-center mb-10 pt-5">
        <h1 className="text-black text-3xl font-bold">AIRBONE TECH</h1>
      </div>
      <Routes>
        <Route path="/" element={<Interface data={data}/>}></Route>
        <Route
          path="/description/:id"
          className=""
          element={<Description data={data}/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
