import Link from 'next/link';
import React from 'react'
import { AppStore, FooterLogo, PlayStore } from '../../assets'

const Footer = () => {
    const links = ['About', 'Help', 'Terms', 'Privacy'];

    return (
        <div className='px-5 py-4 text-white bg-black md:py-6 md:px-8 lg:hidden'>
            <Link href='/'>
                <img className='object-contain w-40 mb-3 cursor-pointer' src={FooterLogo.src} alt="logo" />
            </Link>

            <div>
                {
                    links.map((link) => (
                        <a key={link} href={`#${link}`} className='ml-2 mr-3 text-sm'>{link}</a>
                    ))
                }
            </div>

            <hr className='my-5 opacity-50 md:hidden' />

            <div className='md:hidden'>
                <p className='font-semibold'>Get the Medium app</p>
                <div className='flex mt-5 mb-3 space-x-5'>
                    <a href=""><img src={AppStore.src} alt="App Store Link" /></a>
                    <a href=""><img src={PlayStore.src} alt="Play Store Link" /></a>
                </div>
            </div>

        </div>
    )
}

export default Footer