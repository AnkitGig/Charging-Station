import React from 'react'
import Charge from "../image/charge.png"
import Battery from "../image/battery-removebg-preview.png"


function SessionPay() {
    return (
        <div className='add'>
            <div className='charge'>
                <img src={Charge} alt="" />
                <h4>J1772</h4>
                <p>Slot 1 AC 4.4 kW</p>
            </div>
            <div className='batterypercent'>
                <img src={Battery} alt="" />
            </div>
        </div>
    )
}

export default SessionPay
