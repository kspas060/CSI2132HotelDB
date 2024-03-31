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
            <TabPane tab = "Rooms" key="2">
                <h1>Rooms</h1>
            </TabPane>
            <TabPane tab = "Add Room" key="3">
                <h1>Add Room</h1>
            </TabPane>
            <TabPane tab = "Users" key="4">
                <h1>Users</h1>
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
                            <th>Booking Id</th>
                            <th>User Id</th>
                            <th>Room</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.length && (bookings.map(booking=>{
                            return <tr>
                                <td></td>
                            </tr>
                        }))}
                    </tbody>
                </table>
                {bookings.length && (<h1>There are total {bookings.length} bookings</h1>)}
            </div>
        </div>
    )
}