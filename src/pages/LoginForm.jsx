import React from 'react';
import validate from './validateInfo';
import useForm from './useForm'; 
import './LoginCss.css'
function LoginForm() {

    const { handleChange, handleSubmit, values, errors } = useForm(
        validate
      );
    
  return (
    <div className='form-content login'>
        <span className='form-inputs'>
        <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your Email'
            value={values.email}
            onChange={handleChange}
          />
        </span>
        <span className='form-inputs'>
        <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your Password'
            value={values.password}
            onChange={handleChange}
          />
        </span>
        <button  type='submit'>
          Login
        </button>
    </div>
  )
}

export default LoginForm