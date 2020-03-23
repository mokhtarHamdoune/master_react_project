import React from "react";
import FormInput from '../form-input/form-input.component';
import CostumButton from '../costum-buttom/costum-button.component';
import './sign-in.style.scss';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit=e=>{
        e.preventDefault();
        this.setState({email:"",password:""});
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
                    <CostumButton type="sumbit">Sign In</CostumButton>
                </form>
            </div>
        )
    }
}
export default SignIn;