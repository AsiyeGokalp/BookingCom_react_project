import './navbar.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const {user, dispatch, error} = useContext(AuthContext)

  const handleClick = (e)=> {
    e.preventDefault()
    try{
      dispatch({type:"LOGOUT"})
    }catch(err){
      throw error
    }
   
  }
  

  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to='/' style={{color:"inherit",textDecoration:"none"}}>
        <span className='logo'>Booking</span>
        </Link>
        {user ? ( <div>
           <span style={{marginRight:10}} >{user.details.username}</span>
          <button onClick={handleClick} > sign out</button>
        </div>) : (
          <div className="navItems">
            <Link to='/register'>
          <button className="navButton">Register</button>
          </Link>
          <Link to='/login'>
          <button className="navButton">Login</button>
          </Link>
        </div>) }
      </div>
    </div>
  )
}

export default Navbar 