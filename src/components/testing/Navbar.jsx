import { useState } from "react"
import { Link } from "react-router-dom"
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'

const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const content = <>
        <div className="lg:hidden z-50 block absolute top-20 w-full left-0 right-0 bg-slate-400 backdrop-blur bg-opacity-30 transition">
        <ul className="text-center text-xl p-10">
                        <Link to='/'><li className="my-4 py-4 border-b border-pink-200 text-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover-rounded">Home</li></Link>
                        <Link to='/'><li className="my-4 py-4 border-b border-pink-200 text-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover-rounded">Shop</li></Link>
                        <Link to='/'><li className="my-4 py-4 border-b border-pink-200 text-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover-rounded">Blogs</li></Link>
                        <Link to='/'><li className="my-4 py-4 border-b border-pink-200 text-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover-rounded">Pages</li></Link>
                        <Link to='/'><li className="my-4 py-4 border-b border-pink-200 text-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover-rounded">Contact</li></Link>
                    </ul>
        </div>
    </>
    return(
        <nav className="z-50">
            <div className="h-10vh flex justify-between lg:py-5 px-20
            py-8 border-b">
                <div className="flex items-center flex-1">
                    <h2 className="text-3xl font-bold text-pink-500">Beauty</h2>
                </div>
                <div className="lg:flex md-flex flex-1 justify-end items font-normal hidden">
                    <ul className="flex gap-8 mr-10 text-[18px]">
                        <Link to='/'><li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Home</li></Link>
                        <Link to='/'><li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Shop</li></Link>
                        <Link to='/'><li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Blogs</li></Link>
                        <Link to='/'><li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Pages</li></Link>

                        {/* mega menu start */}
                        <div className="group">
                            <button className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Product</button>
                            <div className="hidden group-hover:flex flex-col absolute left-0 top-16 p-10 w-full bg-white z-20
                            text-black duration-300">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                    <div className="flex flex-col">
                                    <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                    <a href="#" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                                    <a href="#" className="hover:underline hover:text-pink-400">Lotion</a>
                                    <a href="#" className="hover:underline hover:text-pink-400">Body Wash</a>
                                    <a href="#" className="hover:underline hover:text-pink-400">Face Pack</a>
                                    </div>
                                    <div className="flex flex-col">
                                    <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                    <a href="#" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                                    <a href="#" className="hover:underline hover:text-pink-400">Lotion</a>
                                    <a href="#" className="hover:underline hover:text-pink-400">Body Wash</a>
                                    <a href="#" className="hover:underline hover:text-pink-400">Face Pack</a>
                                    </div>
                                    <div className="flex flex-col">
                                    <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                    <a href="#" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                                    <a href="#" className="hover:underline hover:text-pink-400">Lotion</a>
                                    <a href="#" className="hover:underline hover:text-pink-400">Body Wash</a>
                                    <a href="#" className="hover:underline hover:text-pink-400">Face Pack</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* mega menu end */}

                        <Link to='/'><li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Contact</li></Link>
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