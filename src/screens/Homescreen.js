import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Room from '../components/Rooms';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;



function Homescreen() {

  const [rooms, setrooms] = useState([])
  const [loading, setloading] = useState()
  const [error, seterror] = useState()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[fromdate, setfromdate]=useState();
  const[todate, settodate]=useState();

  function filterByDate(dates){
  
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))
    return dates
  }


  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-3'>
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate}/>
        </div>

      </div>


      <Room room={{
        name: 'Ocean View',
        availableRooms: 5,
        price: '$200',
        numOfGuests: 2,
        description: 'Beautiful room with ocean view',
        image: 'https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg',
        startdate: fromdate,
        enddate: todate

      }} />
    </div>


  )
}

export default Homescreen; 