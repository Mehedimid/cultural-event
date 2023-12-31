import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.config';

function Login() {
    const {logInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation().state?.path
  // console.log(location)

    const provider = new GoogleAuthProvider()
    // console.log(createUser)
  
  
    //====== Log in with google =====
    // const googleHandler = () =>{
    //   signInWithPopup(auth, provider)
    //   .then(result => {
    //     toast.success('wow!!! Successfully Logged in!!')
    //   })
    //   .catch(error => toast.error(error.message))
    // }
  
   

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
        // console.log(email, password)
      
      logInUser(email, password) 
      .then(res => {
        // console.log(res.user)
        navigate(location || '/')
      })
      .catch(error => {
        toast.error(error.message)
      })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div >

      <div className="hero min-h-[80vh] sizing bg-base-200 py-10">
        <div className="md:hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* <div className="mt-5">
              <button onClick={googleHandler} className="btn btn-accent  w-full">Login with Google</button>
             </div> */}
             {/* <p className="text-center text-xl font-medium mt-5">or</p> */}
            <form className="md:card-body" onSubmit={handleLogin}>
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
                <button className="btn btn-secondary text-white">Log In</button>
              </div>
            </form>
            <div className="flex justify-evenly mb-5 items-center">
                <p className="inline">Do not Registered?</p><Link to='/register' className="underline text-orange-600 font-semibold text-xl">Register</Link>
            </div>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Login;