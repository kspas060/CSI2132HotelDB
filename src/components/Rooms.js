import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

const RoomOverlay = ({ roomInfo, onHide }) => {
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{roomInfo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Capacity: {roomInfo.capacity}</p>
        <p>Description: {roomInfo.description}</p>
        {/* Add more room information here */}
      </Modal.Body>
      <Modal.Footer>
          <a href="/booking" className="btn btn-primary">Book</a>
          <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

function Room({ room }) {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
      setShowOverlay(!showOverlay);
  };

  return (
      <div className='container'>
          <div className="row justify-content-center mt-5">
              <div className="row bs">
                  <div className="col-md-4">
                      <img src={room.image} className="smallimg" alt={room.name}></img>
                  </div>

                  <div className="col-md-7">
                      <h1>{room.name}</h1>
                      <b>
                          <p>Available Rooms: {room.availableRooms}</p>
                          <p>Price: {room.price}</p>
                          <p>Number of Guests: {room.numOfGuests}</p>
                      </b>

                      <div style={{ float: "right" }}>
                          <button className="btn btn-primary" onClick={toggleOverlay}>View Details</button>
                          {showOverlay && <RoomOverlay roomInfo={room} onHide={toggleOverlay} />}
                      </div>
                      <div style={{ float: "right" }}>
                          <a href="/booking" className="btn btn-primary">Book Now</a>
                      </div>
                      
                  </div>

              </div>
          </div>
      </div>
  );
}

export default Room;
