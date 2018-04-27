import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import history from "./history";
import Index from './jsx/Index.jsx';
import Login from './jsx/Login.jsx';
import Logout from './jsx/Logout.jsx';
import LogSuccess from './jsx/LogSuccess.jsx';
import LogFail from './jsx/LogFail.jsx';

const ROUTER = function () {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path={"/"} component={Index}/>
                    <Route exact path={"/login"} component={Login}/>
                    <Route exact path={"/logout"} component={Logout}/>
                    <Route exact path={"/logSuccess"} component={LogSuccess}/>
                    <Route exact path={"/logFail"} component={LogFail}/>
                </Switch>
            </div>
        </Router>
    )
}
export default ROUTER;