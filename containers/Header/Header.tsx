import React from 'react'

import { MediumM } from '../../assets'

import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <header className='border-b border-black bg-yellow'>
            <Navbar />
            <div className='flex items-center justify-between px-5 py-24 mx-auto max-w-7xl'>
                <div className='space-y-6'>
                    <h1 className='text-7xl md:text-8xl'>Stay curious.</h1>
                    <h3 className='max-w-md text-2xl leading-6'>Discover stories, thinking, and expertise from writers on any topic.</h3>
                    <button className='px-10 py-2 text-xl text-white bg-black rounded-full'>Start reading</button>
                </div>
                <div className=''>
                    <img className='hidden h-32 md:inline-flex lg:h-64' src={MediumM.src} alt="medium m" />
                </div>
            </div>
        </header >
    )
}

export default Header