import React, { useState } from 'react';

const RegisterForm = () => {
  const[formValues,setFormValues] = useState({
    name:"",
    username:"",
    email:"",
    mobile:"",
    checkbox: false,
  });
  const handleChange = (e) =>{
    setFormValues({...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
      <h1 className="text-4xl font-bold text-yellow-300">Super App</h1>
      <h2 className="text-2xl font-semibold text-yellow-300">Create your Account</h2>
    <input type="text" placeholder="Name" value={formValues.name} onChange={handleChange} name="name"/>
    <input type="text" placeholder="userName" value={formValues.username} onChange={handleChange} name="username"/>
    <input type="email" placeholder="Email" value={formValues.email} onChange={handleChange} name="email"/>
    <input type="text" placeholder="mobile" value={formValues.mobile} onChange={handleChange}name="mobile"/>
    <div className="flex-1">
    <input type="checkbox" id="checkbox" name="checkbox" value={formValues.checkbox} onChange={handleChange} />
    
    <label htmlFor="checkbox" className="ml-2 text-yellow-300">I agree to the terms and conditions</label>
    </div>
    
    
    <button className="mt-5 bg-yellow-400 border border-neutral-500">Sign Up</button>
    </div>
    
      
    
  );
}

export default RegisterForm
