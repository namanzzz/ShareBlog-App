import { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);

  async function handleSubmit(event){
    event.preventDefault();
    setErr(false);
    
    try{
      const response = await axios.post("/auth/register", {
      username,
      email,
      password
    });
    response.data && window.location.replace("/login");
    }
    catch(err){
      setErr(true);
    }

    
  }

  return (
    <div className="register">
        <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>

            <label>Username</label>
            <input className='registerInput' type="text" placeholder='Enter your username...'
            onChange={(event)=>{
                setUsername(event.target.value);
            }}
            />


            <label>Email</label>
            <input className='registerInput' type="text" placeholder='Enter your email...'
            
            onChange={(event)=>{
              setEmail(event.target.value);
            }}

            />
            <label>Password</label>
            <input className='registerInput' type="password" placeholder='Enter password...'
            
            onChange={(event)=>{
                setPassword(event.target.value);
            }}

            />

            <button className='registerButton' type='submit'>
                Register
            </button>
        
        </form>

        <button className='registerLoginButton'>
                 <Link className='link'
                            to="/login"
                            >LOGIN</Link>
        </button>
        
        { err && <span style={{fontFamily:'serif', fontSize:'15px', marginTop:'12px', color:'red', fontWeight:'bold'}}>Something went wrong!</span>
        }
       
        
        

    </div>
  )
}