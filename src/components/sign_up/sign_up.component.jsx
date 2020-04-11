import React from 'react' ;
import FormInput from '../form-input/form-input.component';
import CostumButton from '../costum-button/costum-button.component';
import {auth,creatUserProfileDocument} from '../../firebase/firebase.utils'
import './sign_up.style.scss';

class SignUp extends React.Component{

    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = e=>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSumbit= async e =>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;

        console.log(displayName);
        if(password !== confirmPassword){
            alert("password don't match ");
            return ;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            creatUserProfileDocument(user,{displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });

        }catch(error){
            console.error(error);;
            
        }

    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return (
            <div className="sign-up">
                <h1 className="title">I don't have an account</h1>
                <span>Open a new one</span>
                <form onSubmit={this.handleSumbit}>

                    <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    handleChange={this.handleChange} 
                    label="Display Name"
                    required />
                    
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={this.handleChange} 
                    label="Email"
                    required />

                    <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={this.handleChange} 
                    label="Password"
                    required />

                    <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    handleChange={this.handleChange}
                    label='Confim Password' 
                    required />
                        
                    <CostumButton type="submit">
                        Sign Up
                    </CostumButton>

                </form>   
            </div>

        );
    }

}
export default SignUp ;