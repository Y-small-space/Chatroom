import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Films from "../Views/Films/films";
import Cinemas from "../Views/Cinemas/cinemas";
import Center from "../Views/Center/center";
import { HashRouter } from 'react-router-dom/cjs/react-router-dom';


export default function IndexRouter() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/films" Component={Films} />
                    <Route path="/cinemas" Component={Cinemas} />
                    <Route path="/center" Component={Center} />
                    <Redirect from="/" to="/films" />
                </Switch>
            </HashRouter>
        </div>
    )
}
