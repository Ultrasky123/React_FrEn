import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Fragments/Footer'
import Navbar from '../Fragments/Navbar'
import Picture from '../Elements/Picture'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full h-screen bg-black">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-white text-center text-4xl flex justify-center items-center">
            Smart Mannequin 
            <br />
            By STAS-RG
            <br />
            And PT Pindad
            </div>
          <div className="w-full md:w-1/2 text-white">
          <div className="w-full h-screen transform bg-gray-300 relative trapezium-right">
            <img src="" alt="" className="max-w-full h-auto" />
          </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="w-full h-screen transform bg-gray-300 relative trapezium-left">
              <img src="" alt="" className="max-w-full h-auto" />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-white text-center flex justify-center items-center text-4xl">
            Presenting Our
            <br />
            Smart Mannequin
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-gray-300">
        <div className="flex w-full text-center py-10">
          <div className="w-1/3">
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-5 px-5 rounded-full">
            <Link to='/student'>Students</Link>
          </button>
          </div>
          <div className="w-1/3 font-bold text-5xl">
            <p>Meet Our Teams</p>
          </div>
          <div className="w-1/3">
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-5 px-5 rounded-full">
          <Link to='/instructor'>Instructors</Link>
          </button>
          </div>
        </div>
        <div className="">
          <Picture></Picture>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home