import Login from "../../components/Login";
import Navbar from "../../components/Navbar";

export const AuthLogin = () => {
  return (
    <div className="min-h-screen bg-slate-200 overflow-auto">
      <Navbar />
      <Login />
    </div>
  );
};
