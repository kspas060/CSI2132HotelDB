import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const PaymentPopup = ({ onHide }) => {
    return (
        <Modal show={true} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Congratulations!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Your Room Booked Successfully</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};


function Payment() {
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 col-sm-offset-3'>
                    <fieldset>
                        <h1>Credit Card Payment</h1>
                        <div className='form-group'>
                            <label for="cc_name">Card Holder Name</label>
                            <input type='text' className='form-control' id="cc_name" pattern='\w+ \W+.*' title='First and Last Name' required='required'></input>
                        </div>

                        <div className='form-group-row '>
                            <label className='col-md-12'>Card Number</label>
                            <div style={{ float: 'right' }} className='col-md-3 input'>
                                <input type='text' className='form-control' autoComplete='off' maxLength='4' pattern='\d{4}' title='First Four Digits' required=""></input>
                            </div>
                            <div style={{ float: 'right' }} className='col-md-3'>
                                <input type='text' className='form-control' autoComplete='off' maxLength='4' pattern='\d{4}' title='Second Four Digits' required=""></input>
                            </div>
                            <div style={{ float: 'right' }} className='col-md-3'>
                                <input type='text' className='form-control' autoComplete='off' maxLength='4' pattern='\d{4}' title='Third Four Digits' required=""></input>
                            </div>
                            <div style={{ float: 'right' }} className='col-md-3'>
                                <input type='text' className='form-control' autoComplete='off' maxLength='4' pattern='\d{4}' title='Fourth Four Digits' required=""></input>
                            </div>
                        </div>

                        <div className='form-group-row'>
                            <label className='col-md-12'>Card Expiry Date</label>
                            <div style={{ float: 'right' }} className='col-md-9'>
                                <select className='form-control' name='cc_exp_mo'>
                                    <option value='01'>January</option>
                                    <option value='02'>February</option>
                                    <option value='03'>March</option>
                                    <option value='04'>April</option>
                                    <option value='05'>May</option>
                                    <option value='06'>June</option>
                                    <option value='07'>July</option>
                                    <option value='08'>August</option>
                                    <option value='09'>September</option>
                                    <option value='10'>October</option>
                                    <option value='11'>November</option>
                                    <option value='12'>December</option>
                                </select>
                            </div>
                            <div style={{ float: 'right' }} className='col-md-3'>
                                <select className='form-control' name='cc_exp_yr'>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                </select>
                            </div>
                        </div>
                        <div className='form-group-row'>
                            <label className='col-md-12'>Card CVV</label>
                            <div className='col-md-3'>
                                <input type='text' className='form-control' autoComplete='off' maxLength='3' pattern='\d{3}' title='Three digits at the back of your card' required=""></input>
                            </div>
                        </div>
                        <div className='form-group-row'>
                            <div className='col-md-12 text-xs-right'>
                                <a href="/bookingConfirmation" className="btn btn-primary">Cancel</a>
                                <div style={{ float: "left" }}>
                                    <button className="btn btn-primary" onClick={toggleOverlay}>Pay Now</button>
                                    {showOverlay && <PaymentPopup onHide={toggleOverlay} />}
                                </div>
                           
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Payment