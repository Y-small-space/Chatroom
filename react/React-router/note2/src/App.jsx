import React from "react";
import "./App.css"
import Header from "./components/header";
import MyNavLink from "./components/MyNavLink";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const element = useRoutes(routes)
  return (
      <div className="container">
        <Header />
        <div className="list-group">
          <MyNavLink to="/about" title="about">about</MyNavLink>
          <MyNavLink to="/home" title="home">home</MyNavLink>
        </div>
        <div className="panel">
          <div className="panel-body">
            {element}
          </div>
        </div>
      </div>
  );
}

export default App;
