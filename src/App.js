import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component'
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import {auth,creatUserProfileDocument} from './firebase/firebase.utils';
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
    auth.onAuthStateChanged(async userAuth=>{
      // this.setState({currentUser:user});
      if(userAuth){
        const userRef = await creatUserProfileDocument(userAuth);
        userRef.onSnapshot(async snapShot=>{
            this.setState({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            });
            
            console.log(this.state);
        });
        

      }else{
        this.setState({currentUser:userAuth});
      }

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
