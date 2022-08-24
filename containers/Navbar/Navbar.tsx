import React from 'react'

import Link from 'next/link'
import { HeaderLogo } from '../../assets'


const Navbar = () => {
    return (
        <div className='border-b border-black'>
            <div className='flex justify-between p-5 max-w-7xl mx-auto'>
                <div className='flex items-center space-x-5'>
                    <Link href='/'>
                        <img className='w-44 object-contain cursor-pointer' src={HeaderLogo.src} alt="logo" />
                    </Link>
                </div>
                <div className='flex items-center space-x-5 text-sm'>
                    <h3 className='cursor-pointer'>Our story</h3>
                    <h3 className='cursor-pointer'>Membership</h3>
                    <h3 className='cursor-pointer'>Write</h3>
                    <h3 className='cursor-pointer'>Sign In</h3>
                    <h3 className='cursor-pointer bg-black rounded-full text-white py-2 px-3'>Get started</h3>
                </div>
            </div >
        </div>
    )
}

export default Navbar