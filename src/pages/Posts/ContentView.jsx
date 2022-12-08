import React from "react";
import "../../assets/style.css";
import { useParams, useLocation } from "react-router-dom";

const ContentView = () => {
  const { state } = useLocation();
  console.log(state);
  const { id } = useParams();

  return (
    <>
      <div className="contentPost">
        <div className="content">
          <div className="header">
            <span>{state.titlePost}</span>
          </div>
          <div className="isi">
            <span>{state.bodyPost}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentView;
