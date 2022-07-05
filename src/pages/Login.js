import React from 'react'
import { useEffect } from "react";
import {Link} from 'react-router-dom';

function Login(props) {
  useEffect(()=>{
    props.showLoader()
  },[]);
  return (
    <div className='mt-20 flex justify-center'>
          <div className="container md:w-1/2 lg:w-1/3">
          <div className="m-14">
              <h1 className="text-xl lg:text-3xl font-bold text-pink-500"> Login now to start learning.</h1>
              
              <form >
              <div className="flex-col m-4 space-y-6 font-semibold"> 
                      <div>
                          <label htmlFor="email">Enter Email Address</label><br/>
                          <input className="border-2 p-1 w-[100%]" id="email"  name="email" type="text" placeholder="abc@gmail.com" />
                      </div>
                      <div>
                          <label htmlFor="password">Enter password</label><br/>
                          <input className="border-2 p-1 w-[100%]" id="password"  name="password" type="password" placeholder="#@34Ra#" />
                      </div>
                      <div className="flex justify-center">
                          <Link to='/dashboard' className="button px-10 py-4 font-semibold text-center text-white rounded-3xl bg-pink-400 hover:bg-pink-300 hover:scale-110 transition-all ease-in duration-200 ">Login</Link>
                      </div>

                      <hr/>
                      <div>
                      <span className="text-end">Don't have an account ? <Link to="/signup" className="text-blue-600 hover:underline">Signup</Link></span>
                      </div>
              </div> 
              </form> 
          </div>
      </div>
    </div>
  )
}

export default Login
