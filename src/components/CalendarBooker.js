import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarBooker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSelection = () => {
    if (startDate && endDate && startDate <= endDate) {
      setSelectedDates(getDatesRange(startDate, endDate));
    } else {
      setSelectedDates([]);
    }
  };

  const getDatesRange = (start, end) => {
    const datesRange = [];
    const currentDate = new Date(start);
    while (currentDate <= end) {
      datesRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesRange;
  };

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Form.Label srOnly htmlFor="startDate">Start Date</Form.Label>
          <Form.Control
            type="date"
            id="startDate"
            value={startDate ? startDate.toISOString().slice(0, 10) : ''}
            onChange={(event) => handleStartDateChange(new Date(event.target.value))}
            placeholder="Start Date"
            className="w-50 mx-auto"
          />
        </Col>
        <Col>
          <Form.Label srOnly htmlFor="endDate">End Date</Form.Label>
          <Form.Control
            type="date"
            id="endDate"
            value={endDate ? endDate.toISOString().slice(0, 10) : ''}
            onChange={(event) => handleEndDateChange(new Date(event.target.value))}
            min={startDate ? startDate.toISOString().slice(0, 10) : ''}
            placeholder="End Date"
            className="w-50 mx-auto"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="text-center">
          <Button variant="primary" size="lg" block onClick={handleSelection}>
            Select Dates
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <p><strong>Selected Dates:</strong></p>
          <ul>
            {selectedDates.map((date, index) => (
              <li key={index}>{date.toDateString()}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarBooker;


