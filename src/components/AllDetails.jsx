import React from 'react'
import Car from "../image/car.png"

function AllDetails() {
    return (
        <div className='details'>
            <div className='complete'>
                <h4>Charging</h4>
            </div>
            <img src={Car} alt=""/>
            <div className='time-section'>
                <div>
                    <i className="fa-solid fa-flag-checkered"></i>
                    <span>
                        <p className='text'>Started at</p>
                        <p className='time'>2.30 PM</p>
                    </span>
                </div>
                <div>
                    <i className="fa-solid fa-flag-checkered"></i>
                    <span>
                        <p className='text'>Duration</p>
                        <p className='time'>00.02.48</p>
                    </span>
                </div>
                <div>
                    <i className="fa-solid fa-flag-checkered"></i>
                    <span>
                        <p className='text'>Usage</p>
                        <p className='time'>1 kWh</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AllDetails
