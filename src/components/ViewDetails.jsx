import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function ViewDetails(props) {
  const viewid = useParams();
  const allEvents = useLoaderData()
  
  const findData = allEvents.find(item => item.id == viewid.id)
  console.log(findData)

  return (
    <div>
      <Navbar></Navbar>
      <div className="my-20"> 
      <div className="card w-9/12 mx-auto ">
      <div className="flex justify-center "><h2 className="card-title text-3xl ">{findData.title}</h2></div>
  <figure className="px-10 pt-5">
    <img src={findData.img} alt="Shoes" className="rounded-xl w-full md:h-[400px]" />
  </figure>
  <div className="card-body items-center text-center space-y-5">
    <p className="text-base">{findData.description}</p>
    <button className="justify-start btn lg:w-1/4 bg-orange-600 text-white hover:text-black">Joining Price:<span className="lg:ml-2 lg:text-xl ">{findData.price}$</span></button>
  </div>
</div>
      </div>
    </div>
  );
}

export default ViewDetails;
