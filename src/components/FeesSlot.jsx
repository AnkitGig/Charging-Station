import React from 'react'
import Charge from "../image/charge.png"

function FeesSlot() {
    return (
        <div className='add'>
            <div className='charge'>
                <img src={Charge} alt="" />
                <h4>J1772</h4>
                <p>Slot 1 AC 4.4 kW</p>
            </div>
            <div className='extra'>
                <span>
                    <h4>0.00</h4>
                    <p>Idle Time</p>
                </span>
                <span>
                    <h4>$1.25</h4>
                    <p>Idle Fee</p>
                </span>
            </div>
        </div>
    )
}

export default FeesSlot
