import SignUpCard from '../Login/SignUpCard'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [errorResponse, setErrorResponse] = useState(false)
  const navigate = useNavigate()
  const handleErrorResponse = (error) => {
    if (error.response.status === 400) {
      setErrorResponse('Fail... Correct your data')
    }
  }
  const handleSignIn = (data) => {
    axios
      .post('https://ecommerce-api-react.herokuapp.com/api/v1/users', data)
      .then((res) => {
        console.log(res)
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
        handleErrorResponse(err)
      })
  }
  return (
    <div>
      <SignUpCard errorResponse={errorResponse} handleSignIn={handleSignIn} />
    </div>
  )
}

export default SignUp
