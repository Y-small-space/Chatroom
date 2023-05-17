import React, { createContext } from "react"
import "./index.css"

function B(){
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <MyContext.Consumer>
          {(value) => {
            return <h3>从A组件接到的数据为:{value}</h3>;
          }}
        </MyContext.Consumer>
        <C />
      </div>
    );
}
function C(){
    return (
      <div className="grand">
        <h3>我是C组件</h3>
        <MyContext.Consumer>
            {
                value =>{
                    return(
                        <h3>从A组件接到的数据为:{value}</h3>
                    )
                }
            }
        </MyContext.Consumer>
      </div>
    );
}
const MyContext = createContext();
export default function A(){

    const state = {username:'Tom'}

    return(
        <div className="parent">
            <h3>我是A组件</h3>
            <h4>我的用户名是：{state.username}</h4>
            <MyContext.Provider value={state.username}>
                <B />
            </MyContext.Provider>
        </div>
    )
}