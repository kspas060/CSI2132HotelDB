import React from 'react'

function BookingConfirmation() {
    return (
        <div className="row justify-content-center mt-5 bs m-5">

            <div className="col-md-6">
                <h1>Ocean View Room</h1>
                <img src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" className='bigimg'></img>
            </div>

            <div className="col-md-6" style={{textAlign: 'right'}}>
                <h1>Booking Details</h1>
                <hr />

                <div style={{textAlign: 'right'}}>
                    <b>
                        <p>Name: </p>
                        <p>Start Date:</p>
                        <p>End Date:</p>
                        <p>Number of Guests: </p>
                    </b>
                </div>

                <div style={{textAlign: 'right'}}>
                    <b>
                        <h1>Amount</h1>
                        <hr />
                        <p>Total Days: </p>
                        <p>Cost Per Night:</p>
                        <p>Total Amount:</p>
                    </b>
                </div>

                <div style={{float:'right'}}>
                    <button className='btn btn-primary'>Pay Now</button>
                </div>
            </div>

        </div>
    )
}

export default BookingConfirmation