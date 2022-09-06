import SignUpCard from '../Login/SignUpCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const navigate = useNavigate()
  const handleSignIn = (data) => {
    axios
      .post('https://ecommerce-api-react.herokuapp.com/api/v1/users', data)
      .then((res) => {
        console.log(res)
        navigate('/login')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <SignUpCard handleSignIn={handleSignIn} />
    </div>
  )
}

export default SignUp
