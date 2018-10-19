import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Register from './RegisterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  render(){
    return(
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/aboutus" component={About} />
        <Redirect to="/home"/>
      </Switch>
    </div>
    );
  }
}

export default Main;
