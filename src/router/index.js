import React from "react";
import { Route } from "react-router-dom";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import HomeContainer from "../views/home/homeContainer";

const ReactRouter =()=>{
return (
  <React.Fragment>
    <Route exact path="/" component={Login} />
    <Route  path="/register" component={Register} />
    <Route  path="/home" component={HomeContainer} />
  </React.Fragment>
);}
export default ReactRouter;