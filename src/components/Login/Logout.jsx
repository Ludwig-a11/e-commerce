import { Link, useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('Token')
    navigate('/login')
  }
  return (
    <div className="py-20 min-h-screen flex flex-col items-center">
      <div className='h-[10vh] w-full max-w-[1200px]'>
        <ul className="flex flex-wrap items-center ml-4 mb-16 mt-4">
          <li className="mr-6">
            <Link
              className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
              to="/">
              <span>Home</span>
              <svg
                className="ml-6"
                width="4"
                height="7"
                viewBox="0 0 4 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                  fill="currentColor"></path>
              </svg>
            </Link>
          </li>
          <li>
            <span
              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
              href="#">
              User
            </span>
          </li>
        </ul>
      </div>
      <div className='flex justify-center items-center h-[60vh]'>
        <article className="flex flex-col items-center gap-10 p-10 border-2 border-amber-500 mb-10 shadow-2xl rounded-xl hover:scale-105 duration-100">
          <h1 className="text-4xl font-bold text-center">¡Welcome User!</h1>
          <button
            onClick={handleLogOut}
            className="bg-red-400 hover:bg-red-500 px-3 py-2 rounded-lg">
            Logout
          </button>
        </article>
      </div>
    </div>
  )
}

export default Logout
