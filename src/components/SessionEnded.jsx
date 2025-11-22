import React from 'react'
import ChargeComlete from './ChargeComlete'
import ToPay from './ToPay'
import SessionPay from './SessionPay'
import ParkingFees from './ParkingFess'
import PopUp from './PopUp'

function SessionEnded() {
    return (
        <>
            <div className='data'>
                <ChargeComlete />
                <ToPay />
                <SessionPay />
                <ParkingFees />
            </div>
            <PopUp />
        </>
    )
}

export default SessionEnded
