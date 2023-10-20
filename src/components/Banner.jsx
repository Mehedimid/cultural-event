import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div>

<div className="hero min-h-[70vh] " style={{backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-colorful-people-silhouette-running-flying-corporate-culture-poster-background-image_131463.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-black" >
      <h1 className="mb-5 text-2xl md:text-4xl font-bold"> Awesome Cultural Events Management</h1>
      <p className="mb-5 text-sm">Join us for an extraordinary cultural extravaganza! Immerse yourself in a vibrant celebration of diversity, art, and heritage at our upcoming event. From captivating performances to exquisite exhibits, our event promises to showcase the rich tapestry of cultures from around the world. </p>
      <Link to='/register'><button className="btn btn-secondary md:text-lg md:w-96">Get Registered</button></Link>
    </div>
  </div>
</div> 
    </div>
  );
}

export default Banner;
