import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TinderCards from './components/card/TinderCards';
import SwipeButtons from './components/swipeButtons/SwipeButtons';


function App() {
  return (
    <div className="App">

      <Header/>
      
      <Router>
        <Switch>
          <Route path="/chat">
            <h1> This is chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons/>
          </Route>
        </Switch>
     </Router>

      
    </div>
  );
  
}
 

export default App;
 