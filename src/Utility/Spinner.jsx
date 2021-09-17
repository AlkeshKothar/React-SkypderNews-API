import React from 'react'
import image from './spinner.gif'
function Spinner() {
    return (
        <div className="container mt-5 mb-5">
            <img src={image} alt="loading"></img>
        </div>
    )
}

export default Spinner;
