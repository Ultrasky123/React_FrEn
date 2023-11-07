import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillYoutube, AiFillPhone } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'


const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
      <img src="./images/logo_stas.png" alt="STAS-RG Logo" className='w-21 h-21' />
      <div className="pt-10">
        <h1 className='flex items-center'>COE STAS-RG</h1>
        <h1 className='flex items-center'>Telkom University</h1>
        <br />
        <h5>Fakultas Ilmu Terapan</h5>
        <h5>Jl. Telekomunikasi No.1, Sukapura, Kab.</h5>
        <h5>Bandung, 40257</h5>
      </div>
      <div className="pt-10">
      <p className='text-xl'>Our Product</p>
      <br />
      <Link to='/'><p className='hover:underline'>ASP-32</p></Link>
      <Link to='/'><p className='hover:underline'>ISSMET-023</p></Link>

      </div>
      <div className="pt-10">
        <p className='text-xl'>Follow Us</p>
        <br />
        <p>
          <AiFillHome /> 
          STAS-RG Military And Defense Industry 
          Laboratory, 1st Floor, Applied Science 
          School, Telkom University, Indonesia 
          </p>        
          <br />
        <Link to='https://www.youtube.com/@stas_rg'>
          <AiFillYoutube /> 
          STAS-RG FIT Telkom University
        </Link>
        <br />
        <br />
        <p>
          <BiLogoGmail />
          stas-rg@gmail.com
        </p>
      </div>
    </div>
  )
}
export default ItemsContainer