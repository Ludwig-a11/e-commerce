import axios from 'axios'
import LoginCard from '../Login/LoginCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../store/slices/login.slice'
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = (data) => {
    axios
      .post(
        'https://ecommerce-api-react.herokuapp.com/api/v1/users/login',
        data
      )
      .then((res) => {
        dispatch(setLogin(res.data.data.token))
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
