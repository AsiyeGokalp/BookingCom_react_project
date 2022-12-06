import '../login/login.css'
import {useState} from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {useNavigate, Link} from 'react-router-dom'

 const Register = () => {
const [credentials, setCredentials] = useState({
  username:undefined,
  email:undefined,
  password:undefined,
})
const [newUser, setNewUser] = useState()

const {loading, error, dispatch} = useContext(AuthContext)
const navigate = useNavigate(false)

const handleChange = (e) => {
  setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
}

const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify(credentials),
};

const handleClick =async (e) => {
  e.preventDefault()
 try{
  const res = await fetch('/auth/register',options)
  const dataJson = await res.json() 
  setNewUser(true)
 }catch (err) {
  throw err
 } 
}


  return (
    <div className='login'>
      <div className="lContainer">
        <input type="text" id='username' placeholder='username' onChange={handleChange} className="lInput" />
        <input type="email" id='email' placeholder='email' onChange={handleChange} className="lInput" />
        <input type="password" id='password' placeholder='password' onChange={handleChange} className="lInput" />
        <button  onClick={handleClick} className="lButton">Register</button>
        {newUser && (<span>Register Successfully Done!</span>)}
        <div>
        <Link to='/login'>
        <button style={{marginRight:30}} className="lButton">Login</button>
        </Link>
        <Link to='/'>
        <button  className="lButton">Home</button>
        </Link>
        </div>
      </div>

    </div>
  )
}

export default Register
