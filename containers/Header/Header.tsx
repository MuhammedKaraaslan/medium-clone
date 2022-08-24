import React from 'react'

import { MediumM } from '../../assets'

import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <header className='bg-yellow border-b border-black'>
            <Navbar />
            <div className='flex justify-between items-center px-5 py-24 max-w-7xl mx-auto'>
                <div className='space-y-6'>
                    <h1 className='text-8xl'>Stay curious.</h1>
                    <h3 className='text-2xl max-w-md'>Discover stories, thinking, and expertise from writers on any topic.</h3>
                    <button className='text-white bg-black rounded-full px-10 py-1'>Start reading</button>
                </div>
                <div className=''>
                    <img className='hidden md:inline-flex h-32 lg:h-64' src={MediumM.src} alt="medium m" />
                </div>
            </div>
        </header >
    )
}

export default Header