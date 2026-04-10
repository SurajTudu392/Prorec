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
          <>
          <button
            className="primary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
          <button
            onClick={logout}
            className="nav-btn"
          >
            Logout
          </button>
          </>
        ) : (

          <button
            onClick={() => {navigate("/auth");}}
            className="nav-btn"
          >
            
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;