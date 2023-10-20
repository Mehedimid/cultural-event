import React from "react";
import Navbar from "../components/Navbar";

function Offer(props) {
  return (
    <>
    <Navbar></Navbar>
      <div className="hero mt-20 mb-5 bg-base-200 sizing">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/GdzKJWB/images-q-tbn-ANd9-Gc-QOSc3-F0urxo-GIhz55tx-Y19-Ey-Hs69cf-D6ger-A-usqp-CAU.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-1/2"
          />
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl mb-5 font-bold">Get Offer By Promo Code !</h1>
            <div className="relative">
        <input type="text" placeholder="promo code..." className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-secondary absolute md:w-32 top-0 right-0 rounded-l-none">Input</button>
      </div>

          </div>
        </div>
      </div>

      <div className="md:mx-44 mx:pr-30 mb-20">
        <p className=" mb-5">
        "Welcome to ACE, your premier destination for expert cultural event management. We're passionate about bringing cultural experiences to life, and we're excited to offer you an exclusive promotion!
        </p>
        <p className=" mb-5">
        Experience the magic of seamless event planning and execution with us. Whether you're organizing a vibrant festival, an art exhibition, a musical extravaganza, or any cultural event, our dedicated team is here to make your vision a reality.
        </p>
        <h1 className="text-xl mx-44 font-semibold mb-5">Limited-Time Offer:</h1>
        <p className=" mb-5">
        Book your next cultural event with us and enjoy a special limited-time offer! Our seasoned professionals will work closely with you to design, organize, and execute an unforgettable event that celebrates your culture, heritage, and creativity.
        </p>
        <h3 className="mb-4 mx-44 font-medium">Whats Include:</h3>
        <ul className="md:mx-44 mb-4 text-slate-600">
            <li>1. Personalized event planning consultation.</li>
            <li>2. Tailored event design and theme.</li>
            <li>3. Top-notch logistics and vendor management.</li>
            <li>4. Exceptional entertainment and performances.</li>
        </ul>
        <p>
        Don't miss out on this fantastic opportunity to bring your cultural event dreams to life while enjoying exclusive savings. Let us create a memorable, culturally enriching experience that leaves a lasting impression. <br /> <br />

Ready to get started? Contact us today to discuss your event, and let's make your cultural celebration a resounding success!" <br /> <br />

Feel free to adapt and personalize this description to suit your website's tone and style." 
        </p>
      </div>
    </>
  );
}

export default Offer;
