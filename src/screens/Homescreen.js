import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Room from '../components/Rooms';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;



function Homescreen() {

  const [rooms, setRooms] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();

  function filterByDate(dates) {

    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))
    return dates
  }

  useEffect(() => {
    axios.get('http://localhost:3001/api/rooms/getallrooms')
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div className='container'>
      <div className='row mt-5 bs'>
        <div className='col-md-3'>
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>

        <div className='col-md-9'>
          <select style={{ float: "left", marginRight: "10px" }}>
            <option Value="All Hotels">All Hotels</option>
            <option Value="Belmont Hotel">Belmont Hotel</option>
            <option Value="Paradise Hotel ">Paradise Hotel</option>
            <option Value="Sea Shell Hotel">Sea Shell Hotel</option>
            <option Value="Grand Hotel">Grand Hotel Hotel</option>
            <option Value="Casablanca Hotel">Casablanca Hotel</option>
          </select>

          <select style={{ float: "left ", marginRight: "10px" }}>
            <option Value="All Ratings">All Ratings</option>
            <option Value="One Star">One Star</option>
            <option Value="Two Stars">Two Stars</option>
            <option Value="Three Stars">Three Stars</option>
            <option Value="Four Stars">Four Stars</option>
            <option Value="Five Stars">Five Stars</option>
          </select>

          <select style={{ float: "left ", marginRight: "10px"  }}>
            <option Value="Room Capacity">Room Capacity</option>
            <option Value="One Guest">One Guest</option>
            <option Value="Two Guests">Two Guests</option>
            <option Value="Three Guests">Three Guests</option>
            <option Value="Four Guests">Four Guests</option>
            <option Value="Five Guests">Five Guests</option>
          </select>

          <select style={{ float: "left ", marginRight: "10px"  }}>
            <option Value="Any City">Any City</option>
            <option Value="Ottawa, Canada">Ottawa, Canada</option>
            <option Value="Vancouver, Canada">Vancouver, Canada</option>
            <option Value="Cancun, Mexico">Cancun, Mexico</option>
            <option Value="Punta Cana, Dominican Republic">Punta Cana, Dominican Republic</option>
            <option Value="Havana, Cuba">Havana, Cuba</option>
          </select>

          <select style={{ float: "left ", marginRight: "10px"  }}>
            <option Value="Any Number of Rooms Available">Any Number of Rooms Available</option>
            <option Value="20+ Rooms">20+ Rooms</option>
            <option Value="Vancouver, Canada">Vancouver, Canada</option>
            <option Value="Cancun, Mexico">Cancun, Mexico</option>
            <option Value="Punta Cana, Dominican Republic">Punta Cana, Dominican Republic</option>
            <option Value="Havana, Cuba">Havana, Cuba</option>
          </select>
        </div>

      </div>

      <div>
        {rooms.map(room => (
          <Room key={room.name} room={room} />
        ))}
      </div>
    </div>
  )
}
export default Homescreen; 