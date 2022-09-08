import { useNavigate } from "react-router-dom"

const Logout = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem('Token')
        navigate('/login')
    }
  return (
    <div className="py-20 min-h-screen flex justify-center items-center">
        <article className="flex flex-col items-center gap-10 p-10 border-2 border-amber-500 mb-10 shadow-2xl rounded-xl hover:scale-105 duration-100">
            <h1 className="text-4xl font-bold text-center">¡Welcome User!</h1>
            <button onClick={handleLogOut} className="bg-red-400 px-2 rounded-lg">Logout</button>
        </article>
    </div>
  )
}

export default Logout