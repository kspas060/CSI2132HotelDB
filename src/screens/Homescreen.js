import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';
import Room from '../components/Rooms';

function Homescreen() {

  const [rooms, setrooms] = useState([])
  const [loading, setloading] = useState()
  const [error, seterror] = useState()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // useEffect(async() =>{

  //   try{
  //     setloading(true)
  //     //const data = (await axios.get('api/rooms'getallrooms')).data
  //     //setrooms(data)
  //     setloading(false)

  //   }catch (error){
  //     seterror(true)
  //     console.log(error)
  //     setloading(false)
  //   }
  // },[])


  return (
    // // <div>
    //   {/* {loading ?(<h1>Loading...</h1>) : error ? (<h1>error</h1>) : (rooms.map(room =>{
    //       return <h1>rooms</h1> 
    //   }))} */}
    //   {/* <h1>Home Screen</h1>
    // <div className = "row"></div>
    // </div> */}

      // <div className="row bs">
      //   <div className="col-md-4">
      //     {/* </div><img src ></img> */}
      //   </div>

      //   <div className="col-md-7">
      //     <h1>Ocean View</h1>
      //     <b>
      //       <p>Available Rooms: </p>
      //       <p>Price: </p>
      //       <p>Number of Guests: </p>
      //     </b>

      //     <div style={{ float: "right" }}>
      //       <button className="btn btn-primary">View Details</button>
      //     </div>
      //   </div>

      //   <Button variant="primary" onClick={handleShow}>
      //     Launch demo modal
      //   </Button>

      //   <Modal show={show} onHide={handleClose}>
      //     <Modal.Header closeButton>
      //       <Modal.Title>Modal heading</Modal.Title>
      //     </Modal.Header>
      //     <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      //     <Modal.Footer>
      //       <Button variant="secondary" onClick={handleClose}>
      //         Close
      //       </Button>
      //       <Button variant="primary" onClick={handleClose}>
      //         Save Changes
      //       </Button>
      //     </Modal.Footer>
      //   </Modal>

      // </div>

      // <Room/>
      <Room room={{
        name: 'Ocean View',
        availableRooms: 5,
        price: '$200',
        numOfGuests: 2,
        description: 'Beautiful room with ocean view',
        image: 'https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg'
    }} />
    

      )
}

      export default Homescreen; 