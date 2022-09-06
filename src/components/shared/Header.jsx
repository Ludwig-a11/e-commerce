
import { NavLink } from "react-router-dom"


const Header = ({handleCartToggle, cartToggle}) => {
  return (
    <header className="flex z-50 shadow-md w-full h-20 px-5 items-center bg-slate-100 justify-between fixed top-0 ">
      <NavLink className='flex items-center' to="/">
        <img className="w-10" src="./images/logo.png" alt="" />
        <h1 className="font-bold text-xl">E-commerce</h1>
      </NavLink>
      <nav className="flex w-1/4 h-full  ">
        <ul className="flex w-full h-full gap-2">
          <li className="h-full  w-24 flex items-center justify-center ">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/login">
              <img className="w-8" src="./images/user.png" alt="icon" />
            </NavLink>
          </li>
          <li className="h-full  w-24 flex items-center justify-center">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/purchases">
            <img className="w-8" src="./images/bag.png" alt="icon" />
            </NavLink>
          </li>
          <li className="h-full  w-24 flex items-center justify-center">
            <button onClick={handleCartToggle} className="pointer"><img className="w-8" src="./images/cart.png" alt="icon" /></button>
          </li>
        </ul>
      </nav>
      {cartToggle && (
        <section className=' bg-slate-100/[.6] fixed backdrop-blur  right-0 w-1/4 top-0 h-full flex-col py-10'>
          <button className='absolute top-2 right-2 w-8 h-8 bg-cover  bg-[url("./images/close.png")] rounded-full' onClick={handleCartToggle}></button>
          <div className='w-full flex justify-center'>
            <h2 className='font-bold'>Cart</h2>
          </div>
        </section>
      )}
    </header>
  )
}

export default Header