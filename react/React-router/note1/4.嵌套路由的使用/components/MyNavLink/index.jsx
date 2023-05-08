import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './index.css'

export default function MyNavLink(props){

    return (
      <NavLink activeClassName="ap" className="list-group-item" {...props}/>
    );
}