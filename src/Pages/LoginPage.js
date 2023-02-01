import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';


const LoginPage = () => {
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const userName=localStorage.getItem('Email')
     ?  localStorage.getItem('Email'): ('admin@admin.com');
  const userPassword=localStorage.getItem('Password')
  ? localStorage.getItem('Password'):('admin');
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(Email===userName && Password===userPassword){
      toast.success('Login Successful');
      navigate('/profile');
    }else{
      toast.error('Invalid Email or Password');
    }
  }
  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
          <h4 className="form__heading">User Management System </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={Email}
              className="form-control"
              onChange={e=>setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={Password}
              onChange={e=>setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/">Signup !</Link>
            </p>
          </div>
          <button type="submit" onClick={handleSubmit} className="form__button">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
