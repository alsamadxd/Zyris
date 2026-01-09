import SignUp from "../../components/SignUp";
import Navbar from "../../components/Navbar";

export const AuthSignup = () => {
  return (
    <div className="min-h-screen bg-slate-200 overflow-auto">
      <Navbar />
      <SignUp />
    </div>
  );
};
