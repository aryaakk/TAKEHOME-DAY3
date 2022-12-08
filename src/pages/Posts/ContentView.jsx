import React, { useEffect, useState } from "react";
import "../../assets/style.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContentView = () => {
  const { id } = useParams();

  const [posts, setPosts] = useState("");
  async function GetPosts() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
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

  return (
    <>
      <div className="contentPost">
        <div className="content">
          <div className="header">
            <span>{posts.title}</span>
          </div>
          <div className="isi">
            <span>{posts.body}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentView;
