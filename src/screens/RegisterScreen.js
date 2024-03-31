import React, {useState, useEffect} from 'react'
import axios from 'axios'



function RegisterScreen() {
    const[name, setname] =useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const[cpassword, setcpassword] = useState('')

    function register(){
        if(password == cpassword){
            /* const user={
                name,
                email,
                password,
                cpassword
            }
            console.log(user)*/ 
            //console.log(name)
            axios.post("http://localhost:3001/api/customer/create",{
                customer_id: Math.floor(10000 +         Math.random() * 90000),
                full_name: name,
                customer_address: email,
                password: password,
                payment_info: "Credit Card",
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
            window.location.href = "/login";
        }else{
            alert("Passwords do not match")
        }
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