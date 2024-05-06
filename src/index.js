import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// 1.Set up react app using -react-app
// 2.Set up firebase
// 3.Set up React Router
// 4.Build the navbar (header)
// 5. Build the Banner
// 6.Build the Product Component
// 7.Introduce react Context API
// 8.Set up Add to basket button
// - Build Checkout PAge
// - Build Subtotal Component
// - Build login page
// - Deploy the App live on firebase
