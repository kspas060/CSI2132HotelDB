import React from 'react'
import CalendarBooker from '../components/CalendarBooker'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';
import Homescreen from './Homescreen';


function BookingConfirmation() {

    const location = useLocation();
    const { roomInfo, fromdate, todate } = location.state;

    console.log("Booking Confirmation",fromdate, todate);

    const fromDate = new Date(fromdate);
    const toDate = new Date(todate);

    const totalDays = (toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24);


    return (
        <div className="row justify-content-center mt-5 bs m-5">

            <div className="col-md-6">
                <h1>Ocean View Room</h1>
                <img src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" className='bigimg'></img>
            </div>

            <div className="col-md-6" style={{ textAlign: 'right' }}>
                <h1>Booking Details</h1>
                <hr />

                <div style={{ textAlign: 'right' }}>
                    <b>
                        <p>Name: </p>
                        <p>Start Date: {fromdate}</p>
                        <p>End Date: {todate} </p>
                        <p>Number of Guests: {roomInfo.capacity} </p>
                    </b>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <b>
                        <h1>Amount</h1>
                        <hr />
                        <p>Total Days: { totalDays } </p>
                        <p>Cost Per Night: {roomInfo.price}</p>
                        <p>Total Amount: { totalDays * roomInfo.price}</p>
                    </b>
                </div>

                <div style={{ float: 'right' }}>
                    <a href="/payment" className="btn btn-primary">Pay Now</a>
                </div>
            </div>

        </div>
    )
}

export default BookingConfirmation