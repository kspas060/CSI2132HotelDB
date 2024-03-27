import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

function Room({ room }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>

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

                </div>
            </div>
        </div>
    );
}

export default Room;