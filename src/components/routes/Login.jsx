import axios from 'axios'
import LoginCard from '../Login/LoginCard'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
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
  return (
    <div>
      <LoginCard handleLogin={handleLogin} />
    </div>
  )
}

export default Login
