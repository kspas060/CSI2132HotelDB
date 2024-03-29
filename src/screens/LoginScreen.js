import React from 'react'
import {useState, useEffect} from 'react'

function LoginScreen() {
  const[name, setname] =useState('')
  const[email, setemail] = useState('')
  const[password, setpassword] = useState('')
  const[cpassword, setcpassword] = useState('')

  function login(){

          const user={
              email,
              password
          }
          console.log(user)
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

                  <button className='btn-secondary' onClick={login}>Login</button>
              </div>
          </div>
      </div>
  </div>
)
}
export default LoginScreen