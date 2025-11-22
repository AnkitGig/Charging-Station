import React from 'react'

function ParkingFess() {
  return (
    <div className='parking'>
            <span className='remain'>
                <h3>$0.44/kWh</h3>
                <p>Usage based on kWh</p>
            </span>
            <span className='park-fee'>
                <h3>13 min 12 sec</h3>
                <p>Remaining grace period</p>
            </span>
        </div>
  )
}

export default ParkingFess
