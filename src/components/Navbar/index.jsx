import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const {token,loginDispatch}=useLogin();

  const onLoginClick=()=>{
    if(token?.access_token){
      navigate("/auth/login")
    }
    else{
      loginDispatch({
        type:'LOGOUT',
      })
      navigate("auth/login")
    }
  }
  return (
    <header className="flex bg-slate-950 py-2 px-10 text-slate-50 items-center">
      <div
        onClick={() => navigate("/")}
        className="flex items-center  cursor-pointer font-semibold"
      >
        <img src="/z.png" width={70} alt="" />
        <span className="sm:text-5xl text-3xl">y r i s</span>
      </div>
      <nav className="ml-auto flex sm:gap-4 gap-2">
        <span
          onClick={() => navigate("/whishlist")}
          className="material-icons-outlined cursor-pointer text-3xl"
        >
          favorite
        </span>
        <span
          onClick={() => navigate("/cart")}
          className="material-icons-outlined cursor-pointer text-3xl"
        >
          shopping_cart
        </span>
        <div className="relative">
          <span
            onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)}
            className="material-icons-outlined cursor-pointer text-3xl "
          >
            account_circle
          </span>
          {isAccountDropDownOpen && (
            <div className="absolute text-blue-400 px-1 text-sm rounded-2xl">
              <button onClick={onLoginClick}>
                {
                token?.access_token?"Logout":"Login"
              }
                </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
