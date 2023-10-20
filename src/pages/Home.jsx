import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLoaderData } from "react-router-dom";
import Event from "../components/Event";
import Discount from "../components/Discount";
import Branch from "../components/Branch";

function Home(props) {
  const [branches, setBranches] = useState([]);

  const events = useLoaderData();

  useEffect(() => {
    fetch("/branch.json")
    .then(res=>res.json())
    .then(data=> setBranches(data))
  }, []);

  console.log(branches)

  return (
    <>
      <Header></Header>

      <section id="events" className="sizing my-32">
        <h1 className="text-3xl  text-orange-600  text-center mb-9 font-bold">Our Awesome Arrangements</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {events.map((event) => (
          <Event event={event} key={event.id}></Event>
        ))}
          </div>
      </section>

      <section id="discount" className="sizing mb-32">
      <h1 className="text-3xl text-center text-orange-600 mb-9 font-bold">Want to get a Discount?</h1>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
          {events.map((event) => (
          <Discount event={event} key={event.id}></Discount>
        ))}
          </div>
      </section>

<section  className="sizing mb-20">
<h1 className="text-3xl text-center  text-orange-600  font-bold my-9">Our Branches and Manager</h1>
<div className="  grid grid-cols-1 md:grid-cols-2 gap-5">
        {
         branches.length &&  branches?.map((branch, idx) => <Branch key={idx} branch={branch}></Branch>)
        }
      </div>
</section>
    </>
  );
}

export default Home;
