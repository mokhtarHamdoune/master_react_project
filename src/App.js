import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import {Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path="/" >
        <HomePage />
      </Route>
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
