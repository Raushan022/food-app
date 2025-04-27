import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between border-b border-[#d3d3d3] shadow-md shadow-[rgba(0,0,0,0.15)]">
      <div>
        <img className="w-32" src={LOGO_URL} alt="logo" />
      </div>
      <div className="px-5 py-0">
        <ul className="flex list-none text-[20px]">
          <li className="p-[10px] m-[10px]">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-[10px] m-[10px]">
            <Link to="/" className="no-underline text-inherit">
              Home
            </Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link to="/about" className="no-underline text-inherit">
              About us
            </Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link to="/contact" className="no-underline text-inherit">
              Contact us
            </Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link to="/grocery" className="no-underline text-inherit">
              Grocery
            </Link>
          </li>
          <li className="p-[10px] m-[10px]">
            <Link className="no-underline text-inherit">Cart</Link>
          </li>
          <button
            className="px-5 py-0"
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
