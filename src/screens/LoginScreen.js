import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function LoginScreen() {
  const[name, setname] =useState('')
  const[email, setemail] = useState('')
  const[password, setpassword] = useState('')
  const[cpassword, setcpassword] = useState('')

  const [emailError, setEmailError] = useState('')


  function login(email, password)  {
    axios.get(`http://localhost:3001/api/customer/mail?customer_address=${email}&password=${password}`)
      .then(response => {
        if (response.data.length != 0) {
          window.location.href = '/';
        } else {
          setEmailError("Invalid email or password");
        }
      })
  }



  
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5'>

                <div className='bs'>
                    <h2 >Login</h2>

                    <input type='text' className='form-control' placeholder='email'
                    value = {email} onChange={(e)=>{setemail(e.target.value)}}></input>

                    <input type='text' className='form-control' placeholder='password'
                    value = {password} onChange={(e)=>{setpassword(e.target.value)}}></input>

                    <button className='btn-secondary' onClick={login(email, password)}>Login</button>
                    <p>{emailError}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default LoginScreen