"use-client"
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div>
        <Image src={logo} height={100} width={100} alt='logo' />
      </div>
      <div className="hidden md:flex gap-4">
        <a href="/home">Home</a>
        <a href="/pages">Pages</a>
        <a href="/category">Category</a>
        <a href="/news">News</a>
        <a href="/post">Post</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex items-center gap-4 justify-around">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
