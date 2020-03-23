import React from 'react';
import './costum-button.style.scss';

const CostumButton =({children,...rest})=>(
    <button className='custom-button' {...rest}>
        {children}
    </button>
)

export default CostumButton;