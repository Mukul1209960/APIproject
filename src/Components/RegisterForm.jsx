import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const[formValues,setFormValues] = useState({
    name:"",
    username:"",
    email:"",
    mobile:"",
    checkbox: false,
  });
  const[errors,setErrors] = useState({
    name:null,
    username:null,
    email:null,
    mobile:null,
    checkbox:null,
  });
  const navigate = useNavigate();
  const handleSignUp = () =>{
    let isErrors = false;
    if(formValues.name.trim().length === 0){
      setErrors((prev) => ({...prev, name: "Name is Required" }));
      isErrors = true;
    }
    else {
      setErrors((prev)=>({...prev , name:null}))
    }
    if(formValues.username.trim().length === 0){
      setErrors((prev)=>({...prev,username:"Username is Required"}));
      isErrors = true;
    }
    else {
      setErrors((prev)=>({...prev,username:null}))
    }
    if(formValues.email.trim().length === 0){
      setErrors((prev)=>({...prev,email:"Email is Required"}));
      isErrors = true;
    }
    else {
      setErrors((prev)=>({...prev,email:null}))
    }
    if(formValues.mobile.trim().length === 0){
      setErrors((prev)=>({...prev,mobile:"Mobile is Required"}));
      isErrors = true;
    }
    else {
      setErrors((prev)=>({...prev,mobile:null}))
    }
    if(formValues.checkbox === false){
      setErrors((prev)=>({...prev,checkbox: "Please Accept the terms and conditions"}));
      isErrors = true;
    }
    else {
      setErrors((prev)=>({...prev,checkbox:null}))
    }
    console.log(isErrors,"isErrors");
    if(isErrors === false) {
      alert("Registered Successfully");
      navigate("/Movies");
    };
  };
  const handleChange = (e) =>{
    setFormValues({...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
      <h1 className="text-4xl font-bold text-yellow-300">Super App</h1>
      <h2 className="text-2xl font-semibold text-yellow-300">Create your Account</h2>
    <input type="text" placeholder="Name" value={formValues.name} onChange={handleChange} name="name" className="bg-white"/>
    {errors.name ? <p className="text-red-700">{errors.name}</p> : <></>}
    <input type="text" placeholder="userName" value={formValues.username} onChange={handleChange} name="username" className="bg-white"/>
    {errors.username ? <p className="text-red-700">{errors.username}</p> : <></>}
    <input type="email" placeholder="Email" value={formValues.email} onChange={handleChange} name="email" className="bg-white"/>
    {errors.email ? <p className="text-red-700">{errors.email}</p> : <></>}
    <input type="text" placeholder="mobile" value={formValues.mobile} onChange={handleChange}name="mobile" className="bg-white"/>
    {errors.mobile ? <p className="text-red-700">{errors.mobile}</p> : <></>}
    <div className="flex-1">
    <input type="checkbox" id="checkbox" name="checkbox" value={formValues.checkbox} onChange={handleChange} />
    
    <label htmlFor="checkbox" className="ml-2 text-yellow-300">I agree to the terms and conditions</label>
    </div>
    {errors.checkbox ? <p className="text-red-700">{errors.checkbox}</p> : <></>}
    
    
    <button className="mt-5 bg-yellow-400 border border-neutral-500" onClick={handleSignUp}>Sign Up</button>
    </div>
    
      
    
  );
}

export default RegisterForm
