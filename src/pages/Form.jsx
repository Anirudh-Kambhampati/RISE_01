import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Sidebar from '../components/Sidebar';
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://www.twi-global.com/image-library/FAQs/sigma-scanning-electron-microscope-27244220680-o-cropped.jpg' alt='SEM' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Sidebar />
        )}
      </div>
    </>
  );
};

export default Form;