import React from "react";
import { Link } from "react-router-dom";

function Event({ event }) {
  const { img, price, description, id, title } = event;
  return (
    <div>
      <div className="card card-compact card-body bg-base-300 shadow-xl">
      <h2 className="card-title text-2xl">{title}</h2>
        <figure>
          <img
            src={img}
            className="w-full h-52 object-cover"
          />
        </figure>
        <div className="">
 
          <p className="my-5">{description && description.slice(0, 150)}...</p>
          <div className="card-actions items-center justify-between ">
          <button className="justify-start btn  bg-orange-600 text-white hover:text-black">Joining Price:<span className="lg:ml-2 lg:text-xl ">{price}$</span></button>
           <Link to={`/details/${id}`} className=" w-1/2 btn btn-secondary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
