import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CalendarBooker from '../components/CalendarBooker';

export const BookingPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card>
            <Card.Header as="h5">Book a Room</Card.Header>
            <Card.Body>
              <CalendarBooker />
              <hr />
              <div className="text-center">
                <a href="/bookingConfirmation" className="btn btn-primary">Confirm Booking</a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};


