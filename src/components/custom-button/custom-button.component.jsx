import React from 'react';
import './custom-button.styles.scss';

const CustomButtom = ({children, isGoolgeSignIn, ...otherProps}) => (
    
    <button className={`${isGoolgeSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButtom;