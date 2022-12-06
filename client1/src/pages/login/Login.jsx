import './login.css'
import {useState} from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'

 export const Login = () => {
const [credentials, setCredentials] = useState({
  username:undefined,
  password:undefined,
})

const {loading, error, dispatch} = useContext(AuthContext)
const navigate = useNavigate( )

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
  dispatch({type:"LOGIN_START"})
 try{
  const res = await fetch('/auth/login',options)
  const dataJson = await res.json()  
  if(dataJson.success === false){
    dispatch({ type:"LOGIN_FAILURE", payload: dataJson }) 
  }else{
    dispatch({type:"LOGIN_SUCCESS", payload: dataJson})
    navigate('/')
  }
  
 }catch (err) {
  throw err
 } 
}

  return (
    <div className='login'>
      <div className="lContainer">
        <input type="text" id='username' placeholder='username' onChange={handleChange} className="lInput" />
        <input type="password" id='password' placeholder='password' onChange={handleChange} className="lInput" />
        <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
        {error && (<span>{error.message}</span>)}
      </div>

    </div>
    
  )
}

export default Login
