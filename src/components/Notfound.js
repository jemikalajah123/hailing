import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div className="container">
            Ooops...not what you were looking for?<br></br>
            <Link to="/farmer">Go Home</Link>
        </div>
    )
}

export default Notfound
