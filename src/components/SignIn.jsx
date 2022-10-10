import React from 'react';
import './SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
function SignIn() {
    const {register,handleSubmit,formState : {errors}} = useForm()
    const onSubmit = data => console.log(data);
  return (
    <div>Create Account
        <form id='form' className='flex flex-col' style={{border : '1px solid rgba(0,255,0,0.3)'}} onSubmit={handleSubmit(onSubmit)}>
          <Row className='flex'>
          <Col lg={4} md={4} sm={12} xs={12}>
            <input type="text" {...register("username")} placeholder='username' />
            <input type="text" {...register("password")} placeholder='password' />
            <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <input type="text" {...register("email")} placeholder='Enter Email' />
            <input type="text" {...register("mobile")} placeholder='mobile number' />
          </Col>
          </Row> 
            <button className='btn'>Sign In</button>
        </form>
    </div>
  )
}

export default SignIn