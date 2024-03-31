import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const RoomOverlay = ({ roomInfo, onHide }) => {
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{roomInfo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Capacity: {roomInfo.capacity}</p>
        <p>Amenities: {roomInfo.amenities}</p>
        <p>Damages: {roomInfo.damages}</p>
        {/* Add more room information here */}
      </Modal.Body>
      <Modal.Footer>
          <a href="/booking" className="btn btn-primary">Book</a>
          <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};


const NoDateOverlay = ({ onHide }) => {
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Invalid Dates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please choose valid From and To Dates</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};


function Room({ room, fromdate, todate }) {
  const [showOverlay, setShowOverlay] = useState(false);

  console.log(fromdate, todate);

  const toggleOverlay = () => {
      setShowOverlay(!showOverlay);
  };



  return (
      <div className='container'>
            <div key={room.room_no} className="row bs">
                <div className="col-md-4">
                    <img src={room.image_link} className="smallimg" alt={room.name}></img>
                </div>

                <div className="col-md-7">
                    <h1>{room.view}</h1>
                    <b>
                        <p>Price: {room.price}</p>
                        <p>Number of Beds: {room.capacity}</p>
                        <p>Description: {room.description}</p>

                    </b>

                    <div style={{ float: "right" }}>
                        <button className="btn btn-primary" onClick={toggleOverlay}>View Details</button>
                        {showOverlay && <RoomOverlay roomInfo={room} onHide={toggleOverlay} />}
                    </div>
                    <div style={{ float: "right" }}>
                        

                        {fromdate && todate ? (
                            <Link className="btn btn-primary" 
                                to="/bookingConfirmation" state={{roomInfo: room, fromdate: fromdate, todate: todate}}>
                                Book Now</Link>
                        ) : (
                            <button className="btn btn-primary" onClick={() => alert("Please choose a valid date range")}>Book Now</button>
                        )}

                        
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Room;
