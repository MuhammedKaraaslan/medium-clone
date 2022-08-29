import React from 'react'

import Link from 'next/link'
import { HeaderLogo } from '../../assets'


const Navbar = () => {
    return (
        <div className='border-b border-black'>
            <div className='flex justify-between p-5 mx-auto max-w-7xl'>
                <div className='flex items-center space-x-5'>
                    <Link href='/'>
                        <img className='object-contain cursor-pointer w-44' src={HeaderLogo.src} alt="logo" />
                    </Link>
                </div>
                <div className='flex items-center space-x-5 text-sm'>
                    <h3 className='hidden cursor-pointer md:inline-flex'>Our story</h3>
                    <h3 className='hidden cursor-pointer md:inline-flex'>Membership</h3>
                    <h3 className='hidden cursor-pointer md:inline-flex'>Write</h3>
                    <h3 className='hidden cursor-pointer md:inline-flex'>Sign In</h3>
                    <button className='px-4 py-2 text-white bg-black rounded-full'>Get started</button>
                </div>
            </div >
        </div>
    )
}

export default Navbar