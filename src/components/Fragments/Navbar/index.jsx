import { useState } from "react"
import { Link } from "react-router-dom"
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'
// import Megamenu from "./Megamenu"
import Content from "./Content"

const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const content = <>
    <Content></Content>
    </>
    return(
        <nav className="z-50">
            <div className="h-10vh flex justify-between lg:py-5 px-20
            py-8 border-b">
                <div className="flex items-center flex-1">
                    {/* <h2 className="text-3xl font-bold text-pink-500">Beauty</h2> */}
                    <Link><img src="./public/images/logo_stas.png" className="h-10 w-15"/></Link>
                    <Link></Link>
                </div>
                <div className="lg:flex md-flex flex-1 justify-end items font-normal hidden">
                    <ul className="flex gap-[10rem] mr-10 text-[18px]">
                        <Link to='/'><li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Home</li></Link>
                        <Link to='/'><li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Teams</li></Link>
                        <Link to='/'><li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">LiveScreen</li></Link>
                    </ul>
                </div>
                <div className="">
                {click && content}
                </div>
                <button className="block lg:hidden transition:none" onClick={handleClick}>
                    {click ? <FaTimes className="text-black" /> : <CiMenuFries className="text-black"/>}
                </button>
            </div>
        </nav>
    )
    }
export default Navbar