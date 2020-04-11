import React from "react";
import "./sign-in-up.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from '../../components/sign_up/sign_up.component';
const SignInUp =()=>(
    <div className="sign-in-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInUp;