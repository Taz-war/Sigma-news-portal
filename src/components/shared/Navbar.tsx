"use-client"
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import Header from './Header';

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
        pathname: '/categories/news?category=all-news',
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

const Navbar = () => {
    return (
        <>
        <Header />
            <nav className="flex items-center justify-between p-4 bg-black">
                <div>
                    <Image src={logo} height={100} width={100} alt='logo' />
                </div>
                <div className="hidden md:flex gap-4">
                    {navItems.map((items, index) => (
                        <Link key={index} href={items.pathname} className={`${buttonVariants({ variant: "outline" })} bg-black border-none text-white hover:bg-[#131314] hover:text-white`}>
                            {items.route}
                        </Link>
                    ))}

                </div>
                <div className="flex items-center gap-6 justify-around text-white text-xl">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
