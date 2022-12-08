import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../assets/style.css";

const Header = () => {
    const navigate = useNavigate();
    const clickToHome = () => {
        navigate('/');
    }
  return (
    <div className="wrapperHeader" onClick={clickToHome}>
      <div className="header">
        <span>GET CONTENT TAKE HOME DAY 3</span>
      </div>
    </div>
  );
};

export default Header