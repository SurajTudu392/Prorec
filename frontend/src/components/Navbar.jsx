import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth");
  };

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
          <button
            onClick={logout}
            className="nav-btn"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;