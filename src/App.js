import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import MainBody from "./components/Mainbody/MainBody";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <MainBody />
    </div>
  );
}

export default App;
