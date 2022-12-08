import React, { useState, useEffect } from "react";
import "../../assets/style.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContentViewTodos = () => {
  const { id } = useParams();
  const [todos, SetTodo] = useState("");
  async function GetPosts() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      if (response.status == 200) {
        SetTodo(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  let complete
  if (todos.completed == false) {
    complete = "BELUM SELESAI"
  }else{
    complete = "SELESAI"
  }
  
  useEffect(() => {
    GetPosts();
  }, []);

  console.log(todos.title)
  return (
    <>
      <div className="contentPost">
        <div className="content">
          <>
            <div className="header"><span>{todos.title}</span></div>
              <div className="isi"><span>{complete}</span></div>
          </>
        </div>
      </div>
    </>
  );
};

export default ContentViewTodos;
