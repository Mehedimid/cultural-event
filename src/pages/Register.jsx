import React from "react";
import Navbar from "../components/Navbar";

function Register(props) {
  return (
    <div >
      <Navbar></Navbar>
      <div className="hero min-h-[80vh] sizing bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary text-white">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
