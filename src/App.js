import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch,Link} from 'react-router-dom';

const Hats =()=>(<div>
<Link to="/">Home Page</Link>
<h1>Hello from  hat </h1>
</div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" >
        <HomePage />
      </Route>
      <Route path="/shop/hats">
        <Hats/>
      </Route>
    </Switch>
  );
}

export default App;
