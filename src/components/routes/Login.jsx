import axios from 'axios'
import LoginCard from '../Login/LoginCard'
import { useNavigate } from 'react-router-dom'
import Logout from '../Login/Logout'
const Login = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('Token')

  const handleLogin = (data) => {
    axios
      .post(
        'https://ecommerce-api-react.herokuapp.com/api/v1/users/login',
        data
      )
      .then((res) => {
        localStorage.setItem('Token', res.data.data.token)
        navigate('/')
      })
      .catch((err) => console.log(err))
  }
  if (token) {
    return (<Logout />)
  }else{
    return (<LoginCard handleLogin={handleLogin} />)
  }
}

export default Login
