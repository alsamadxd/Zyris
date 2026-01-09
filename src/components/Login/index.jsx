import React from "react";
import { useLogin } from "../../context/LoginContext";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { email, password ,loginDispatch} = useLogin();
  
  const navigate=useNavigate();
  const onFormSubmit = async(e) => {
    e.preventDefault();
    const data= await userLogin(email,password);
    loginDispatch({
        type:'TOKEN',
        payload:{
            token:data
        }
    })
    if(data.access_token){
      navigate("/");
    }

  };

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: e.target.value,
    });
  };
  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: e.target.value,
    });
  };

  return (
    // <form onSubmit={onFormSubmit} className=" mx-auto mt-24 rounded-xl bg-blue-100 shadow-xl w-150 p-10">
    //   <h2 className="text-3xl text-center mb-5 font-semibold text-slate-950">Login</h2>
    //   <div className="flex flex-col gap-3">

    //     <span>Email *</span>
    //     <input
    //       onChange={onEmailChange}
    //       required
    //       type="email"
    //       placeholder="abc@gmail.com"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-3">
    //     <span>Password *</span>
    //     <input onChange={onPasswordChange} required type="password" placeholder="Enter Your Password"/>
    //   </div>
    //   <div>
    //     <button className="bg-blue-500 font-semibold  cursor-pointer text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none transition ">
    //       Login
    //     </button>
    //   </div>
    // </form>
    <>
      <form
        onSubmit={onFormSubmit}
        className="mx-auto mt-24 rounded-xl bg-blue-50 shadow-2xl w-96 p-8"
      >
        <h2 className="text-4xl text-center mb-6 font-semibold text-gray-900">
          Login
        </h2>
        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium text-gray-600" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            onChange={onEmailChange}
            required
            type="email"
            placeholder="abc@gmail.com"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <label
            className="text-sm font-medium text-gray-600"
            htmlFor="password"
          >
            Password *
          </label>
          <input
            id="password"
            onChange={onPasswordChange}
            required
            type="password"
            placeholder="Enter Your Password"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 cursor-pointer font-semibold text-slate-50 px-6 py-3 rounded-lg w-full hover:bg-blue-700 focus:outline-none transition">
            Login
          </button>
        </div>
        <div className="flex gap-3 items-center mt-4">
          <p>Don't have a Account</p>
          <button
            onClick={() => navigate("/auth/signup")}
            className="p-2 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-slate-50 border border-b-blue-400"
          >
            Sign-up
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
