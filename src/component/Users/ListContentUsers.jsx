import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/style.css";

const ListContentUsers = () => {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  async function GetPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
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

  async function ClickRender(postItem) {
    navigate(`/userslist/${postItem.id}`);
  }

  return (
    <>
      <div className="wrapPost">
        {posts?.map((post, index) => (
          <div className="list" key={index} onClick={() => ClickRender(post)}>
            <p>{post.id}.</p>
            <span>{post.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListContentUsers;
