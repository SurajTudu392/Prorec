import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  return (
    <nav className="navbar">
      {/* LEFT - LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        ProRec 🚀
      </div>

      {/* RIGHT - NAV BUTTONS */}
      <div className="nav-right">
        <button onClick={() => navigate("/explore")}>
          Explore
        </button>

        <button onClick={() => navigate("/saved")}>
          Saved
        </button>

        <button onClick={() => navigate("/ai")}>
          AI
        </button>

        {user ? (
          <button
            className="primary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        ) : (
          <button
            className="primary-btn"
            onClick={() => navigate("/auth")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;