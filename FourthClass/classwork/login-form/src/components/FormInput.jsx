import { useState } from 'react'
import './FormInput.css'


function FormInput(){
  const [showPassword, setShowPassword] = useState(true);

  function hidePassword(){
    setShowPassword(!showPassword);
  }

  return(
    <>
      <h1>Hello, Welcome to my website</h1>
      <input 
        placeholder="Email" 
        className="input-text"
      />
      <input 
        placeholder="Password"
        type={showPassword ? "Password" : "text"}  
        className="input-Password"
      />
      <button onClick={hidePassword} >{showPassword ? "show" : "hide"}</button>
      <div>
        <button 
          className="click-button" 
        >Login</button>
        <button 
          className="click-button"
        >Sign up</button>
      </div>
    </>
  )
}

export default FormInput;