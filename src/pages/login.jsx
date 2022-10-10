import React from "react";
import { useForm } from "react-hook-form";
import './login.css';

function Login()  {
  const {handleChange} = (event)=> {
    console.log(event);
    event.preventDefault();
    useForm();}


  return (
    <div className="Login" onSubmit={handleChange}>
    <form>
      <input type = "text" name="username" placeholder="User Name" onChange={handleChange} />
      <input type = "password" name="password" placeholder="Password" onChange={handleChange} />
      <input type = 'submit' name="submit" value='submit' className='submit' />
    </form>
    </div>
  );
};
export default Login;