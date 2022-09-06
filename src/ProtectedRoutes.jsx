import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoutes = () => {
  const token = useSelector((state) => state.loginSlice)
  console.log(token)
  if (token) {
    console.log(token)
    return <Outlet />
  } else {
    console.log(token)
    return <Navigate to={'/login'} />
  }
}

export default ProtectedRoutes
