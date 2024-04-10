import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="card justify-center m-auto top-10 shrink-0 w-full max-w-md shadow-xl bg-base-100"  style={{background:"rgba(238,237,228,0.02)", border:"2px solid rgba(255,255,255,0.2)", backdropFilter:"blur(6px)", }}>
        <h2 className="font-bold text-2xl ml-4  mt-3" >Please Login!</h2>
        <form className="card-body p-5 gap-0">
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
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-cyan-800 text-white">Login</button>
          </div>
          <p className="text-sm m-1 text-center">
            Don't have account?
            <span className="p-1">
              <a href="/signup" className="underline">
                signup
              </a>
            </span>
          </p>
        </form>
        <div className="text-center space-x-2 mb-4">
          <button className="p-3 rounded-full bg-[#333] hover:bg-[#00FFFF]">
            <FaGoogle className="h-5 w-5 text-white" />
          </button>
          <button className="p-3 rounded-full bg-[#333] hover:text-white hover:bg-[#00FFFF]">
            <FaGithub className="h-5 w-5 text-white" />
          </button>
          <button className="p-3 rounded-full bg-[#333] hover:text-white hover:bg-[#00FFFF]">
            <FaFacebook className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
