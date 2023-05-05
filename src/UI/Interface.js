import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Interface = ({data}) => {


  const navigate = useNavigate()
  const handleDescription = (id) =>{
    navigate(`/description/${id}`)
  }
  
  return (
    <div className="">
      <div className="grid grid-cols-2 justify-items-center gap-4 ml-5 mr-5 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
        {/* <div className="flex flex-wrap gap-4 ml-5"> */}
        {data.map((items) => {
          const { show, score } = items;
          const premiredDate = show.premiered
          const year = premiredDate? premiredDate.split('-')[0] : ""

          if (!show.image || !show.image.medium) {
            return null; // Skip this card
          }
          return (
            <div key={score}>
              {show.image && show.image.medium && (
                <div className="flex justify-center items-center rounded-3xl bg-white w-40 sm:w-44 lg:w-56 shadow-2xl p-2 sm:p-3">
                  <div className="">
                    {show.image && show.image.medium && (
                      <div className="pt-1 cursor-pointer">
                        <img
                          className="h-full w-full object-contain rounded-3xl"
                          src={show.image.medium}
                          alt=""
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-center ml-2">
                      <p className="text-lg font-medium">{show.name}</p>
                      <p>{year}</p>
                    </div>
                    <div className="flex mt-1 justify-center">
                        <button onClick={()=>handleDescription(show.id)} className="w-full bg-blue-500 hover:bg-blue-400 duration-500 transition ease-in-out p-1 text-white rounded-3xl ">See More</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Interface;
