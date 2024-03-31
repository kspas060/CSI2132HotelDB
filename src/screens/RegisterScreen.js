import React, {useState, useEffect} from 'react'
import axios from 'axios'



function RegisterScreen() {
    const[name, setname] =useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const[cpassword, setcpassword] = useState('')

    function register(){
        if(password == cpassword){
            const user={
                name,
                email,
                password,
                cpassword
            }
            console.log(user)
        }else{
            alert("Passwords do not match")
        }
    }
    function login(email, password)  {
        axios.post("http://localhost:3001/api/customer/create",{
            customer_id: Date.now(),
            full_name,
            customer_address,
            password,
            payment_info: 0
        })
        .then(response => {
            console.log(response.data);
            alert("Registration successful")
        })
        .catch(error => {
            console.log(error);
        })
    }




    
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5'>

                <div className='bs'>
                    <h2 >Register</h2>
                    <input type='text' className='form-control' placeholder='Name' 
                    value = {name} onChange={(e)=>{setname(e.target.value)}}></input>

                    <input type='text' className='form-control' placeholder='email'
                    value = {email} onChange={(e)=>{setemail(e.target.value)}}></input>

                    <input type='text' className='form-control' placeholder='password'
                    value = {password} onChange={(e)=>{setpassword(e.target.value)}}></input>

                    <input type='text' className='form-control' placeholder='confirm password'
                    value = {cpassword} onChange={(e)=>{setcpassword(e.target.value)}}></input>

                    <button className='btn-secondary' onClick={register}>Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterScreen