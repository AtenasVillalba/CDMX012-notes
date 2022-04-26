import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./ReactDefault.js/App";
import reportWebVitals from "./ReactDefault.js/reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterView from "./Routes/RegisterView";
import NotFoundView from "./Routes/NotFoundView";
import LoginView from "./Routes/LoginView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="Register" element={<RegisterView />} />
        <Route path="Login" element={<BrowserRouter />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
