import React from 'react'
import './custom-button.styles.scss';


const CustomButton = ({children,inverted, isGoogleSignIn, ...otherProps}) =>(
    <button {...otherProps} className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}>
        {children}
    </button>
)

export default CustomButton;