// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // This imports the Tailwind styles
import Nav from "./components/Nav";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
