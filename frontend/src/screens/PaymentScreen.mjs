import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { savePayment } from '../actions/cartActions'
import CheckoutSteps from '../component/CheckoutSteps'

function PaymentScreen(props){

    const [paymentMethod, setPaymentMethod] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePayment({paymentMethod}))
        props.history.push('placeorder')
    }

    return(
    <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>
                        Payment
                    </h2>
                </li>
                
                <li>
                    <div>
                        <label htmlFor="address">
                            Paypal
                        </label>
                        <input type="radio" value='paypal' name='paymentMethod' id='paymentMethod' onChange={(e) => setPaymentMethod(e.target.value)}>

                        </input>
                    </div>
                </li>
                <li>
                    <button type='submit' className='button primary'>
                        Continue
                    </button>
                </li>
            </ul>
        </form>
    </div>
    </div>
    )
}

export default PaymentScreen