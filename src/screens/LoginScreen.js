import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function LoginScreen() {
    const[name, setname] =useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const[cpassword, setcpassword] = useState('')
    const[customerID, setcustomerID] = useState('')
    const [emailError, setEmailError] = useState('')
    

    function login(email, password)  {
    axios.get(`http://localhost:3001/api/customer/mail?customer_address=${email}&password=${password}`)
        .then(response => {
        if (response.data.length != 0) {
            const customer_id = response.data[0].customer_id
            // window.location.href = `/?customer_id=${customer_id}`;
            console.log(customer_id)
            setcustomerID(customer_id)
            setEmailError("User Exists. Will shortly direct to home page");
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

                    

                    {customerID ? <Link to={'/'} state={{customer_id: customerID}}><button className='btn-secondary'>login</button></Link> : 
                    <Link to={'/login'} ><button className='btn-secondary' onClick={() => login(email, password)}>login</button></Link>
                    }
                    {emailError && <div className="alert alert-danger">{emailError}</div>}


                </div>
            </div>
        </div>
    </div>
    )
}
export default LoginScreen