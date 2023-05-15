import React from "react";
import Detail from "./Detail";
import {Link,Route} from "react-router-dom";

export default function Messages(){
  const state = {
    Messages:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'}
    ]
  }
  const { Messages } = state;
    return (
      <div>
        <ul>
          {
            Messages.map((msgObj)=>{
              return(
                <li key={msgObj.id}>
                  <Link to={`/home/messages/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <Route path="/home/messages/detail/:id/:title" component={Detail} />
      </div>
    );
}