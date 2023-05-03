import React from "react";
import {Link,Route} from "react-router-dom"
import "./App.css"
import About from "./components/about/about";
import Home from "./components/home/home";

function App() {
  return (
    <div className="container"> 
      <div className="page-header">
        <h2>React Router Demo</h2>        
      </div>
      <div className="list-group">
            {/* 原生html中，靠<a>跳转不同的页面 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}

            {/* 在React中靠路由链接实现切换组件--编写路由链接  */}
              <Link className="list-group-item" to="/about">about</Link>
              <Link className="list-group-item" to="/home">home</Link>
      </div>
      <div className="panel">
        <div className="panel-body">
          {/* 注册路由 */}
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} /> 
         {/*  <About/>
          <Home/> */}
        </div>
      </div>
    </div> 
  );
}

export default App;
