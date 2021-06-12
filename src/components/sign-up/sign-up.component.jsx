import React, {useState} from 'react';

import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';
import CustomButtom from '../custom-button/custom-button.component';

const SignUp = ({signUpStart}) => {

    const [userCredetials, setUserCredentials] = useState({displayName: '',
    email: '',
    password: '',
    confirmPassword: ''});

    const {displayName, email, password, confirmPassword} = userCredetials;

    const handleSubmit = async event => {
        event.preventDefault();


        if(password != confirmPassword){
            alert("passwords don't match");
            return;
        }

        signUpStart({displayName, email, password});
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredetials, [name]:value});
    }
        return(        
        <div className='sign-up'>
            <h2 className='title'> I do not have an account</h2>
            <span> Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Name'
                required
                />

                <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
                />

                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
                />
                <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label=' Confirm Password'
                required
                />
                <CustomButtom
                type='submit'
                >SIGN UP</CustomButtom>
            </form>
            </div>
            )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials =>  dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);