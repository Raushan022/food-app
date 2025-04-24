import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header Rendered");

  // if no dependency array => useEffect is called on every render of that component.
  // if empty dependency array [] => useEffect is called on initial render(just once).
  // if dependency array is [btnNameReact] => called everytime btnNameReact is updated.
  // note: useEffect is always atleast called on initial render.
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "inherit" }}>
              Cart
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
