import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';
import Room from '../components/Rooms';

function Homescreen() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/rooms/getallrooms')
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div>
      {rooms.map(room => (
        <Room key={room.name} room={room} />
      ))}
    </div>
  )
}

      export default Homescreen; 