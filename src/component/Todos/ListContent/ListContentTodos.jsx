import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/style.css";

const ListContentTodos = () => {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  async function GetPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (response.status == 200) {
        setPosts(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetPosts();
  }, []);
  console.log(posts);

  async function ClickRender(postItem) {
    navigate(`/todolist/${postItem.id}`);
  }

  return (
    <>
      <div className="wrapPost">
        {posts?.map((post, index) => (
          <div className="list" key={index} onClick={() => ClickRender(post)}>
            <p>{post.id}.</p>
            <span>{post.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListContentTodos;
