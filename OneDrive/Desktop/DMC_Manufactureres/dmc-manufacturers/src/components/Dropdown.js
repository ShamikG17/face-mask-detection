import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((val, ind) => {
            return (
                <li key={ind}><Link className="dropdown-link" to={val.path} onClick={() => setClick(false)}>{val.title}</Link></li>
            )
        })}  
      </ul>
    </>
  );
};

export default Dropdown;
