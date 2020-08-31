import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/home'
import Main from './pages/main'
import Signup from './pages/signup'
import Result from './pages/pullresult.js'
import Vote from './pages/vote.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Main}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/result" component={Result}></Route>
          <Route exact path="/vote/:id" component={Vote}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
