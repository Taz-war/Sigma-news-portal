import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { buttonVariants } from '../ui/button'

const navItems = [
    {
        route: 'Home',
        pathname: '/',
    },
    {
        route: 'Pages',
        pathname: '/pages',
    },
    {
        route: 'Category',
        pathname: '/category',
    },
    {
        route: 'News',
        pathname: '/news',
    },
    {
        route: 'About',
        pathname: '/about',
    },
    {
        route: 'Contact',
        pathname: '/contact',
    },
]

const Footer = () => {
    return (
        <div className=' justify-center bg-black min-h-60'>
            <div className=" w-full flex items-center gap-6 justify-center text-white  text-2xl p-2 pt-5">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <div className="hidden md:flex w-full items-center gap-6 justify-center p-2">
                {navItems.map((items, index) => (
                    <Link key={index} href={items.pathname} className={`${buttonVariants({ variant: "outline" })} bg-black border-none text-white hover:bg-[#27272A] hover:text-white`}>
                        {items.route}
                    </Link>
                ))}
            </div>
            <div className='w-full text-center'>
                <p className="text-sm text-muted-foreground">@2024 The Dragon News. Designed by Fahim tazwer</p>
            </div>
        </div>
    )
}

export default Footer