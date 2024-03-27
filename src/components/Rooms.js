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
            <Button variant="primary" onClick={() => console.log("Book button clicked")}>
                Book
                <a href="/booking"></a>
            </Button>
            <Button variant="secondary" onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
function Room({ room }) {
    const [showOverlay, setShowOverlay] = useState(false);
    //const [show, setShow] = useState(false);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    const roomInfo = {
        name: 'Sample Room',
        capacity: 10,
        description: 'This is a sample room for demonstration purposes.',
        // Add more room information here
    };

    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                <div className="row bs">
                    <div className="col-md-4">
                        <img src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg"  className="smallimg"></img>
                    </div>

                    <div className="col-md-7">
                        <h1>Ocean View</h1>
                        <b>
                            <p>Available Rooms: </p>
                            <p>Price: </p>
                            <p>Number of Guests: </p>
                        </b>

                        <div style={{ float: "right" }}>
                            <button className="btn btn-primary" onClick={toggleOverlay}>View Details</button>
                            {showOverlay && <RoomOverlay roomInfo = {roomInfo} onHide={toggleOverlay} />}
                        </div>
                    </div>

                    {/*
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    */}

                </div>
            </div>
        </div>
    );
}

export default Room;