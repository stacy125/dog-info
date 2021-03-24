import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div>
            <ul className="link">
                <div>
                <Link className="home" to="/home">Home</Link> 
                </div>
                <div>
                <Link className="alldogs" to='/alldogs'>All Dogs</Link>
                </div>
            </ul>
        </div>
    )
}

export default Nav
