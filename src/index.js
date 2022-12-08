import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/style.css";
import App from "./App";
import Header from "./component/Header/Header";
import reportWebVitals from "./reportWebVitals";
import PostsPage from "./pages/Posts/PostsPage";
import TodosPage from "./pages/Todos/TodosPage";
import UsersPage from "./pages/Users/UsersPage";
import ContentView from "./pages/Posts/ContentView";
import ContentViewTodos from "./pages/Todos/ContentViewTodos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="posts" element={<PostsPage />} />
          <Route path="todos" element={<TodosPage/>} />
          <Route path="users" element={<UsersPage/>} />
          <Route path="photos" element />
          <Route path="/article/:id" element={<ContentView />} />
          <Route path="/todolist/:id" element={<ContentViewTodos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
