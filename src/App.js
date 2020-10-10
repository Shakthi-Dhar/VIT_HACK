import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link,Redirect}from 'react-router-dom';
import Header from './Header/Header'
import Part1 from './Part1/Part1'
import Part2 from './Part2/Part2'
import Part3a from './Part3a/Part3a'
import Part3b from './Part3b/Part3b'
import Home from './Home/Home'
function App() {
  return (
    <Router>
      <h1>Covid++</h1>
      <Header></Header>
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Part1" component={Part1} />
        <Route path="/Part2" component={Part2} />
        <Route path='/Part3a' component={Part3a} />
        <Route path='/Part3b' component={Part3b} />
      </Switch>
    </Router>
  );
}

export default App;
