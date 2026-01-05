import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate=useNavigate();

  return (
    <header className='flex bg-slate-950 py-2 px-6 text-slate-50 items-center'>
        <div onClick={()=>navigate("/")} className='flex items-center  cursor-pointer font-semibold'>
            <img src="/z.png" width={70} alt="" />
            <span className="sm:text-5xl text-3xl">y r i s</span>
        </div>
        <nav className="ml-auto flex sm:gap-4 gap-2">
            <span onClick={()=>navigate('/whishlist')} className="material-icons-outlined cursor-pointer text-3xl">
                favorite
            </span>
            <span onClick={()=>navigate('/cart')} className="material-icons-outlined cursor-pointer text-3xl">
                shopping_cart
            </span>
            <span onClick={()=>navigate('/user')} className="material-icons-outlined cursor-pointer text-3xl">
                account_circle
            </span>
        </nav>
    </header>
  )
}

export default Navbar