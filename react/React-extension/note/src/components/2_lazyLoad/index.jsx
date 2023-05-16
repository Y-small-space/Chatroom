import React, { Suspense, lazy } from "react";
import { Link, Route, Routes} from "react-router-dom";
import './index.css'
import Loading from "./Lodaing";

const Home = lazy(()=> import('./Home'))
const About = lazy(()=> import('./About'))

export default function Demo() {
  return (
    <div className="container">
      <div className="page-header">
        <h2>React Router Demo</h2>
      </div>
      <div className="list-group">
        <Link className="list-group-item" to="/about">
          about
        </Link>
        <Link className="list-group-item" to="/home">
          home
        </Link>
      </div>
      <div className="panel">
        <div className="panel-body">
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}


