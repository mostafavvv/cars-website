import React from 'react'
 import masterCard from "../../assets/all-images/master-card.jpg"
 import paypal  from "../../assets/all-images/paypal.jpg"
 import "../../styles/Payment-method.css"
 const PaymentMeyhod = () => {
  return (
    <>
    <div className="payment mt-3">
        <label htmlFor="" className='d-flex alidn-items-center gap-2'>
            <input type="radio"  /> Direct Bank Transfer
        </label>
    </div>
    <div className="payment mt-3">
        <label htmlFor="" className='d-flex alidn-items-center gap-2'>
            <input type="radio"  /> Cheque Payment
        </label>
    </div>
    <div className="payment mt-3 d-flex align-item-center justify-content-between">
        <label htmlFor="" className='d-flex alidn-items-center gap-2'>
            <input type="radio"  /> Master Card
        </label>
        <img src={masterCard} alt="" />
    </div>

    <div className="payment mt-3 d-flex align-item-center justify-content-between">
        <label htmlFor="" className='d-flex alidn-items-center gap-2'>
            <input type="radio"  /> PayPal
        </label>
        <img src={paypal} alt="" />
    </div>


    <div className='payment text-end mt-5'>
        <button>Reserve Now</button>
    </div>

    </>
  )
}

export default PaymentMeyhod