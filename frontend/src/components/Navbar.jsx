import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  return (
    <div className="navbar">
      <h1 className="logo">ProRec</h1>

      <div>
        {!user ? (
          <button
            onClick={() => navigate("/auth")}
            className="nav-btn"
          >
            Login / Signup
          </button>
        ) : (
          <span>Welcome 👋</span>
        )}
      </div>
    </div>
  );
};

export default Navbar;