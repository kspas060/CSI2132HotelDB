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

function Room({ room, fromdate, todate }) {
  const [showOverlay, setShowOverlay] = useState(false);

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
                        {/* Add more attributes as needed */}
                    </b>

<<<<<<< HEAD
                      <div style={{ float: "right" }}>
                          <button className="btn btn-primary" onClick={toggleOverlay}>View Details</button>
                          {showOverlay && <RoomOverlay roomInfo={room} onHide={toggleOverlay} />}
                      </div>
                      {/* <Link to={`/booking/${fromdate}/${todate}`}>
                        <button className="btn btn-primary">Book Now</button>
                      </Link> */}
                      <div style={{ float: "right" }}>
                          <a href="/booking" className="btn btn-primary">Book Now</a>
                      </div >
                      
                  </div>

              </div>
          </div>
      </div>
=======
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
>>>>>>> dbfcbf5263dc0179d8667ef4a31f4cf6a7b2949a
  );
}

export default Room;
