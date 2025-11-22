import React from 'react'

function ToPay() {
    return (
        <div className='used'>
            <span className='usage'>
                <h3>$0.44/kWh</h3>
                <p>Usage based on kWh</p>
            </span>
            <span className='fees'>
                <h3>13 min 12 sec</h3>
                <p>Remaining grace period</p>
            </span>
        </div>
    )
}

export default ToPay
