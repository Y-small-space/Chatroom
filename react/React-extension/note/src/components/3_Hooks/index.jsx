import React, { useState, Component, useEffect, useRef } from "react";
import { ReactDOM } from "react";

/* export default class Demo extends Component {
  
  state = {count:0};
  
  add = ()=>{
    this.setState(state => ({count:state.count+1}));
  }
  unmount=()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState( state =>({count:state.count+0.5}))
    },1000)
  }
  
  componentWillUnmount (){
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
            <h2>当前求的和为{this.state.count}</h2>
           <button onClick={this.add}>点我加一</button>
            <button onClick={this.unmount}>点我删除组件</button> 
      </div>
    )
  }
} */
export default function Demo(){
  const [count,setCount] = useState(0);
  const [name,setName] = useState('Tom');
  const myRef = useRef();

  useEffect(()=>{
    let timer = setInterval(()=>{
      setCount(count => count+1)
    },1000)
    return()=>{
      clearInterval(timer)
    }
  },[])

  function add(){
    //setCount(count+1);第一种方法
    setCount(()=>{return(count+1)})
  }

  function show(){
    alert(myRef.current.value)
  }

  function changeName(){
    setName('JOY')
  }
  
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  return(
    <div>
      <input type="text" ref={myRef}></input>
      <h2>求的和为：{count}</h2>
      <h2>name:{name}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我改名</button>
      <button onClick={unmount}>点我删除组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}