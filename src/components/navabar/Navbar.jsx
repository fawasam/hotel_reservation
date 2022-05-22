import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import "./navbar.css"


const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">
              <Link to={'/'}>
            Booking.com
            </Link>
            </span>
           {user ? user.username:<>
            <div className="navItems">
                <button className="navButton "><Link className='link' to={"/login"}>Register</Link></button>
                <button className="navButton"><Link className='link'  to={"/login"}>Login</Link></button>
            </div>
             </>
            }
        </div>
    </div>
  )
}

export default Navbar