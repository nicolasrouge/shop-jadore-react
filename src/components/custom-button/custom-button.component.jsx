import React from 'react';
import './custom-button.styles.scss';

const CustomButtom = ({children, isGoolgeSignIn, inverted, ...otherProps}) => (
    
    <button className={`${isGoolgeSignIn ? 'google-sign-in': ''} ${inverted ? 'inverted': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButtom;