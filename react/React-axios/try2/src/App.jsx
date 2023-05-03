import React from "react";
import './App.css'
import List from "./components/List";
import Search from "./components/Search";

function App() {
  return (
    <div className="container">
      <Search/>
      <List />
    </div>
  );
}

export default App;
