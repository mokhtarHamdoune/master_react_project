import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component'
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import {auth} from './firebase/firebase.utils';
import {Route,Switch} from 'react-router-dom';


class App extends React.Component {

  constructor(){
    super();

    this.state={
      currentUser :""
    }
  }

  unsubscibeFromAuth=null;

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    })
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path='/sign' component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
