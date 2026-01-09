// import { useReducer } from "react";
import { createContext,useContext,useReducer} from "react";
import { loginReducer } from "../reducers/loginReducer";

const LoginContext=createContext();

const LoginProvider=({children})=>{

    const initialState={
        email:'',
        password:'',
        token:''
    }
    const [state, loginDispatch] = useReducer(loginReducer,initialState);
    const {email,password,token}=state;
    return(
        <LoginContext.Provider value={{email,password,token,loginDispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin=()=>useContext(LoginContext);

export {LoginProvider, useLogin}