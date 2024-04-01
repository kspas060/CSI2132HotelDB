import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import axios from 'axios'

function AdminScreen() {
  return (
    <div className='col-mt-3 ml-3 mr-3 bs'> 
        <h2 className='text-center' style={{fontSize: '30px'}}><b>Admin Panel</b></h2>
        <Tabs defaultActiveKey='1'>
            <TabPane tab = "Bookings" key="1">
                <Bookings></Bookings>
            </TabPane>
            <TabPane tab = "Add Booking" key="2">
                <Addbooking></Addbooking>
            </TabPane>
            <TabPane tab = "Add Room" key="3">
                <Addroom></Addroom>
            </TabPane>
            <TabPane tab = "Users" key="4">
                <Customers></Customers>
            </TabPane>
        </Tabs>
    </div>
  )
}

export default AdminScreen

export function Bookings(){

    const[bookings, setbookings] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/booking/getallbookings')
          .then(response => {
            setbookings(response.data);
          })
          .catch(error => console.log(error));
      }, []);

    return(
        <div className='row'>
            <div className='col-md-10'>
                <h1>Bookings</h1>
                <table className='table table-bordered table-dark'>
                    <thead className='bs thead-dark'>
                        <tr>
                            <th>Room Number</th>
                            <th>User Id</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.length && (bookings.map(bookings=>{
                            return <tr>
                                <td>{bookings.room_no} </td>
                                <td>{bookings.customer_id}</td>
                                <td>{bookings.start_date}</td>
                                <td>{bookings.end_date}</td>
                                <td>Booked</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
                {bookings.length && (<h1>There are total {bookings.length} bookings</h1>)}
            </div>
        </div>
    )
}

export function Customers(){

    const[customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/customer/getallcustomers')
          .then(response => {
            setCustomers(response.data);
          })
          .catch(error => console.log(error));
      }, []);

    return(
        <div className='row'>
            <div className='col-md-10'>
                <h1>Customers</h1>
                <table className='table table-bordered table-dark'>
                    <thead className='bs thead-dark'>
                        <tr>
                            <th>Customer Id</th>
                            <th>Full Name</th>
                            <th>Customer Address</th>
                            <th>Password</th>
                            <th>Payment Info</th>
                        </tr>
                    </thead>

                    <tbody>
                        {customers.length && (customers.map(customers=>{
                            return <tr>
                                <td>{customers.customer_id} </td>
                                <td>{customers.full_name}</td>
                                <td>{customers.customer_address}</td>
                                <td>{customers.password}</td>
                                <td>{customers.payment_info}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export function Addroom() {
    const[roomnum, setRoomnum] = useState('')
    const[address, setAddress] = useState('')
    const[extendable, setExtendable] = useState('')
    const[view, setView] = useState('')
    const[amenities, setAmenitites] = useState('')
    const[damages,setDamages] = useState('')
    const[capacity, setCapacity] = useState('')
    const[pricepernight, setPricePerNight] = useState('')
    const[link, setLink] = useState('')

    function addRoom()  {

        console.log(capacity)
        
        axios.post("http://localhost:3001/api/room/create",{
            room_no: roomnum,
            address: address,
            extendable: extendable,
            view: view,
            amenities: amenities,
            damages: damages,
            capacity: capacity,
            price: pricepernight,
            image_link: link,
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
    <div className='row'>
        <div className='col-md-5'>
            <input type = 'text' className='form-control' placeholder='Room number'
                value={roomnum} onChange={(e)=>{setRoomnum(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='Address'
            value = {address} onChange={(e)=>{setAddress(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='If extendable (yes or no)'
            value = {extendable} onChange={(e)=>{setExtendable(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='View (mountain or sea view)'
            value = {view} onChange={(e)=>{setView(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='Amenities'
            value = {amenities} onChange={(e)=>{setAmenitites(e.target.value)}}>
            </input>
        </div>

        <div className='col-md-5'>
            <input type = 'text' className='form-control' placeholder='Damages'
            value = {damages} onChange={(e)=>{setDamages(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='Capacity'
            value = {capacity} onChange={(e)=>{setCapacity(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='Price Per Night'
            value = {pricepernight} onChange={(e)=>{setPricePerNight(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='Image Link'
            value = {link} onChange={(e)=>{setLink(e.target.value)}}>
            </input>

            <div className='text-right'>
                <button className='btn btn-primary' onClick={addRoom}> Add Room</button>
                
            </div>
        </div>


    </div>
  )
}

//add booking by admin
export function Addbooking() {
    const[roomnum, setRoomnum] = useState('')
    const[hotel, sethotel] = useState('')
    const[customerid, setcustomerid] = useState('')
    const[sin, setsin] = useState('')
    const[startdate, setstartdate] = useState('')
    const[enddate,setenddate] = useState('')

    function addbooking()  {
        
        axios.post("http://localhost:3001/api/booking/create",{
            room_no: roomnum,
            room_hotel: hotel,
            customer_id: customerid,
            SIN: sin,
            start_date: startdate,
            end_date: enddate,
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
    <div className='row'>
        <div className='col-md-5'>
            <input type = 'text' className='form-control' placeholder='Room number'
                value={roomnum} onChange={(e)=>{setRoomnum(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='Hotel'
            value = {hotel} onChange={(e)=>{sethotel(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='Customer ID'
            value = {customerid} onChange={(e)=>{setcustomerid(e.target.value)}}>
            </input>
        </div>

        <div className='col-md-5'>
        <input type = 'text' className='form-control' placeholder='Employee SIN'
            value = {sin} onChange={(e)=>{setsin(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='Start Date'
            value = {startdate} onChange={(e)=>{setstartdate(e.target.value)}}>
            </input>
            <input type = 'text' className='form-control' placeholder='End Date'
            value = {enddate} onChange={(e)=>{setenddate(e.target.value)}}>
            </input>

            <div className='text-right'>
                <button className='btn btn-primary' onClick={addbooking}> Add Booking</button>
                
            </div>
        </div>


    </div>
  )
}

