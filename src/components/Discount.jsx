import React from "react";

function Discount({ event }) {
  const { discount, title, price } = event;
  const discountPrice = parseFloat(price) *(parseFloat(discount)/100) 
  const JoiningPrice = parseFloat(price)- discountPrice
  return (
    <div>
      <div className="card h-52  bg-pink-200">
        <div className="card-body">
          <h2 className="text-base ">
            {title}
            <div className="badge badge-neutral p-3 text-xl">{discount}</div>
          </h2>
          <p className="text-xl font-semibold "> Save Up to {discount} </p>
          <div className="card-actions justify-end ">
             <button className="btn bg-orange-600 text-white w-full">Get Deal</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
