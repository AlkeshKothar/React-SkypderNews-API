import React from 'react'

function Heading() {
    return (
        <div className="container bg-white mt-4 pt-3 pb-3" style={{borderRadius: "2rem"}}>
            <div className="spinner-border" role="status">
                <span className="visually">SpyDer</span>
            </div>
            <strong className= "mx-4" >Welcome to Spyder News. We bring you the top news filtered from various outlet...</strong>
        </div>
    )
}

export default Heading;
