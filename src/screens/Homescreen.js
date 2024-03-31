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
    setfromdate((dates[0]).format('YYYY-MM-DD'))
    settodate((dates[1]).format('YYYY-MM-DD'))
    return dates
  }

  useEffect(() => {
    axios.get('http://localhost:3001/api/room/getallrooms')
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div className='container'>
      <div className='row mt-5 bs'>
        <div className='col-md-3 input'>
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
        
        <div className='col-md-9'>
          <select style={{ float: "left", marginRight: "10px" }}>
            <option Value="Any Hotel">Any Hotel Chain</option>
            <option Value="Belmont Hotel">Belmont Hotel</option>
            <option Value="Paradise Hotel ">Paradise Hotel</option>
            <option Value="Sea Shell Hotel">Sea Shell Hotel</option>
            <option Value="Grand Hotel">Grand Hotel</option>
            <option Value="Casablanca Hotel">Casablanca Hotel</option>
          </select>

          <select style={{ float: "left ", marginRight: "10px" }}>
            <option Value="Any Rating">Any Rating</option>
            <option Value="One Star">One Star</option>
            <option Value="Two Stars">Two Stars</option>
            <option Value="Three Stars">Three Stars</option>
            <option Value="Four Stars">Four Stars</option>
            <option Value="Five Stars">Five Stars</option>
          </select>

          <select style={{ float: "left ", marginRight: "10px"  }}>
            <option Value="Any Room Capacity">Any Room Capacity</option>
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
            <option Value="20+ Rooms Available">20+ Rooms Available</option>
            <option Value="50+ Rooms Available">50+ Rooms Available</option>
            <option Value="100+ Rooms Available">100+ Rooms Available</option>
            <option Value="250+ Rooms Available">250+ Rooms Available</option>
            <option Value="500+ Rooms Available">500+ Rooms Available</option>
          </select>

          <select style={{ float: "left ", marginRight: "10px"  }}>
            <option Value="Any Price">Any Price</option>
            <option Value="100$-200$ Per Night">100$-200$ Per Night</option>
            <option Value="200$-300$ Per Night">200$-300$ Per Night</option>
            <option Value="300$-400$ Per Night">300$-400$ Per Night</option>
            <option Value="400$-500$ Per Night">400$-500$ Per Night</option>
            <option Value="500$-600$ Per Night">500$-600$ Per Night</option>
          </select>
        </div>
      </div>

      <div>
        {rooms.length === 0 ? (
          <p style={{textAlign: "center"}}>
            Sorry, the currently database is down, cannot present rooms
          </p>
        ) : (
          rooms.map(room => (
            <Room key={room.name} room={room} fromdate={fromdate} todate={todate} />
          ))
        )}
      </div>
    </div>
  )
}
export default Homescreen; 