import React, {useEffect, useState} from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 10) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <h1 style={{color: "Blue", fontSize: "22px"}}>MOVIEINFO</h1>
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="AVATAR"
      />
    </div>
  );
}

export default Navbar;
