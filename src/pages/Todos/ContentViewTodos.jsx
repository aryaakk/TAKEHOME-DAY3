import React from "react";
import "../../assets/style.css";
import { useParams, useLocation } from "react-router-dom";

const ContentViewTodos = () => {
  const { state } = useLocation();
  console.log(state);
  const { id } = useParams();
  let Complete;
  if(state.completePost == false){
    Complete = "BELUM SELESAI"
  }else{
    Complete = "SELESAI"
  }

  return (
    <>
      <div className="contentPost">
        <div className="content">
          <div className="header">
            <span>{state.titlePost}</span>
          </div>
          <div className="isi">
            <span>{Complete}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentViewTodos;
