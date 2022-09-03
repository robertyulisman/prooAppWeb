// import logo from "./logo.svg";
import { Routing } from "../config";
import "./App.css";
import AOS from "aos";
import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import ChatMe from "../components/ChatMe";

function App() {
  return (
    <>
      <div className="bg-[#F0F2F9]">
        <Provider store={store}>
          <Routing />
          <ChatMe />
        </Provider>
      </div>
    </>
  );
}

export default App;
