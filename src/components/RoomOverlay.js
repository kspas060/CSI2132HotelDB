import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

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
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RoomOverlay;