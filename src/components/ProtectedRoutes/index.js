// import { useNavigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../api/auth";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   (async() => {
  //     const { token } =await userLogin();
  //     if (!token) {
  //       navigate("/auth/login");
  //     }
  //   })();
  // });
const { token } = userLogin();
  return token.access_token ? children : navigate("/auth/login");
};
export default ProtectedRoutes;
