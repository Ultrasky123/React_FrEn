import { useState } from "react"
import { Link } from "react-router-dom"
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'
import Megamenu from "./Megamenu"
import Content from "./Content"

const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const content = <>
    <Content></Content>
    </>
    return(
        <nav className="z-50">
            <div className="h-10vh flex justify-between lg:py-5 px-20 border-b
            py-8">
                <div className="flex items-center flex-1">
                    <Link><img src="./public/images/logo_stas.png" className="h-20 w-25"/></Link>
                </div>
                <div className="lg:flex md-flex flex-1 justify-end items font-normal hidden">
                    <ul className="flex gap-[10rem] mr-10 text-[20px]">
                        <Link to='/'><li className="hover:text-green-400 transition border-b-2 border-white hover:border-green-400 cursor-pointer pt-6">Home</li></Link>
                        <Megamenu></Megamenu>
                        <Link to='/'><li className="hover:text-green-400 transition border-b-2 border-white hover:border-green-400 cursor-pointer pt-6">LiveScreen</li></Link>
                    </ul>
                </div>
                <div className="">
                {click && content}
                </div>
                <button className="block lg:hidden transition:none" onClick={handleClick}>
                    {click ? <FaTimes className="text-black h-[3em] w-[1em]" /> : <CiMenuFries className="text-black h-[3em] w-[2em]"/>}
                </button>
            </div>
        </nav>
    )
    }
export default Navbar