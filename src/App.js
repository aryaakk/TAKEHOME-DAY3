import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import "./assets/style.css";
import ListContent from "./component/Posts/listContent/ListContentPost";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="wrapperNav">
          <div className="contentNav">
            <NavLink
              className="aLink"
              to="posts"
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: "#8F3E00",
                      padding: "10px",
                      borderRadius: "10px",
                    }
                  : null
              }
            >
              CONTENT POSTS
            </NavLink>
            <NavLink
              className="aLink"
              to="todos"
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: "#8F3E00",
                      padding: "10px",
                      borderRadius: "10px",
                    }
                  : null
              }
            >
              CONTENT TODOS
            </NavLink>
            <NavLink
              className="aLink"
              to="users"
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: "#8F3E00",
                      padding: "10px",
                      borderRadius: "10px",
                    }
                  : null
              }
            >
              CONTENT USERS
            </NavLink>
            <NavLink
              className="aLink"
              to="photos"
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundColor: "#8F3E00",
                      padding: "10px",
                      borderRadius: "10px",
                    }
                  : null
              }
            >
              CONTENT PHOTOS
            </NavLink>
          </div>
        </div>
        <div className="contentList">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
