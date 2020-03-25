import React from 'react';
import './costum-button.style.scss';

const CostumButton =({children,isGoogleSignIn,...rest})=>(
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...rest}>
        {children}
    </button>
)

export default CostumButton;