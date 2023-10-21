import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";

function Register(props) {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()
  // console.log(createUser)


  //====== Log in with google =====
  const googleHandler = () =>{
    signInWithPopup(auth, provider)
    .then(result => {
      toast.success('wow!!! Successfully Registered!!')
    })
    .catch(error => toast.error(error.message))
  }


  // ===== log in with email and pass =====
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // condition
    const uppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
    if (password.length < 6) {
      toast.error("error: password must be 8 character");
      return;
    } else if (!uppercase) {
      toast.error("error: password need uppercase");
      return;
    } else if (!hasSpecialCharacter) {
      toast.error("error : no special charachter");
      return;
    }


    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success('wow!!! Successfully Registered!!')
        e.target.email.value = ''
        e.target.password.value = ""
        // navigate('/')
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="my-10 text-center font-bold text-3xl">Please Register Here</h1>
      <div className="hero min-h-[80vh] sizing bg-base-200">
        <div className="md:hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
             <div className="mt-5">
              <button onClick={googleHandler} className="btn btn-accent  w-full">Login with Google</button>
             </div>
             <p className="text-center text-xl font-medium mt-5">or</p>
            <form className="md:card-body" onSubmit={handleRegister}>
            <ToastContainer></ToastContainer>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary text-white">
                  Register
                </button>
              </div>
            </form>
            <div className="flex justify-evenly mb-5 items-center">
              <p className="inline">Already Registered?</p>
              <Link
                to="/login"
                className="underline text-orange-600 font-semibold text-xl">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Register;
