import React from "react";
import FormInput from '../form-input/form-input.component';
import CostumButton from '../costum-button/costum-button.component';
import {auth,singInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.style.scss';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit= async e=>{
        e.preventDefault();
        const {email,password} =this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:"",password:""});
        }catch(error){
            console.error(error);
        }
    }

    handleChange=e=>{
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return(
            <div className="sign-in">
                <h1 className='title'>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label='email' handleChange={this.handleChange} value={this.state.email}  required  />
                    <FormInput type="password" name="password" label='password' handleChange={this.handleChange} value={this.state.password}  required />
                    <div className="costum-button-container"> 
                        <CostumButton type="sumbit">Sign In</CostumButton>
                        <CostumButton type="button" onClick={singInWithGoogle} isGoogleSignIn>Sign In With Google</CostumButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;