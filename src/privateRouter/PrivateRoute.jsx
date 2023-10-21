import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Login from '../pages/Login';

function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
      return <h1 className='text-5xl font-bold text-center my-52'>Loading...
      <span className="loading  loading-spinner text-primary"></span> <br /><br />
       {/* <small className='text-base'>reload please, You may have given wrong password </small> */}
      </h1>
   }  

    if(!user){
      return <Navigate to='/login' state={{path:location.pathname}}></Navigate>
    }
  
  return children; 

}

export default PrivateRoute;