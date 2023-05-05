import React from "react";
import { useLocation, useParams,Navigate } from "react-router-dom";
const Description = ({ data }) => {
  const { id } = useParams();
  const selectedCard = data.find((card) => card.show.id === parseInt(id));
  const { show } = selectedCard;
  const summary = show.summary.replace(/<\/?p>/g, "");


  return (
    <div className="sm:flex mr-5">
      <div className="ml-5 ">
      <img className="h-80  w-[30rem] sm:h-96 sm:max-w-[40rem] object-contain " src={show.image.original} alt={show.name} /> 
      </div>
      <div>
      <h2 className="pl-5 mt-5 text-2xl text-black font-medium">
        {show.name}
      </h2>
      <p className="pt-5 pl-5 pr-5">
        <span className="text-lg font-medium">Description</span> : {summary}
      </p>
      <p className="pt-5 pl-5 pr-5">
        <span className="text-lg font-medium">Rating :</span>
        {show.rating.average}
      </p>
      <p ><span className= "pl-5 text-lg font-medium"> languages: </span>{show.language} </p>
      </div>
    </div>
  );
};

export default Description;
