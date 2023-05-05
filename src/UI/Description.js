import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Form from "./Form/Form";
const Description = ({ data }) => {
  const { id } = useParams();
  const selectedCard = data.find((card) => card.show.id === parseInt(id));
  const { show } = selectedCard;
  const summary = show.summary.replace(/<\/?p>/g, "");
  // console.log(selectedCard)

  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(value => !value);
  };

  

  return (
    <div>
      <div className="sm:flex ml-5 mr-5">
        <div className="">
          <img
            className="h-80  w-[30rem] sm:h-96 sm:max-w-[40rem] object-contain "
            src={show.image.original}
            alt={show.name}
          />
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
          <p>
            <span className="pl-5 text-lg font-medium"> languages: </span>
            {show.language}{" "}
          </p>
          <button
            className="bg-blue-500 rounded-md p-2 ml-5 mt-5"
            onClick={handleClick}
          >
            Book Ticket
          </button>

          {showForm && 
          <Form onClose= {handleClick} hello={data}/> }
        </div>
      </div>
    </div>
  );
};

export default Description;
