import React from "react";
import {Route, Switch} from "react-router-dom"
import "./App.css"
import About from "./pages/about";
import Home from "./pages/home";
import Header from "./components/header";
import Test from "./pages/test";
import MyNavLink from "./components/MyNavLink";

function App() {
  return (
    <div className="container"> 
      <Header/>
      <div className="list-group">
            {/* 原生html中，靠<a>跳转不同的页面 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}

            {/* 在React中靠路由链接实现切换组件--编写路由链接  */}
            {/* <NavLink className="list-group-item" to="/about">about</NavLink>
            <NavLink className="list-group-item" to="/home">home</NavLink> */}
              <MyNavLink to="/about" title="about" >about</MyNavLink>
              <MyNavLink to="/home" title="home" >home</MyNavLink>
      </div>

      <div className="panel">
        <div className="panel-body">
            {/* 注册路由 */}
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} /> 
              <Route path="/home" component={Test} /> 
            </Switch>
          {/* 
          <About/>
          <Home/> 
          */}
        </div>
      </div>
    </div> 
  );
}

export default App;
