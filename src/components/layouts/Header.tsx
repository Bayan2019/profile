// import React from "react";
import { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from 'react-router-dom';
import { NAVS } from '../../constants/intex';
import { FaUserPlus } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';
import { PiXBold } from 'react-icons/pi';
import { MdMenu } from 'react-icons/md';

const Header = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // const [isHovered, setIsHovered] = useState(false);

    // const navigator = useNavigate();
    // const [is]
    // const {logout, isLoggedIn} = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header>
            <nav
                className={`fixed  top-0 left-0 right-0 z-1000 w-full py-0 my-0 transition-all duration-300 bg-cyan-400 ${!isScrolled 
                ? 'backdrop-blur-lg' : 'bg-transparent'}`}
            >
            <div className='max-w-[1320px] mx-auto'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <a href='/' className='flex items-center my-0 py-0 inset-0'>
                                {/* <Code className='w-6 h-6' /> */}
                        <span id='brand'>SAPAR</span>
                    </a>

                    {/* Link for Everyone */}
                    <nav className='hidden md:flex items-center gap-7 bg-transparent'>
                        {
                            NAVS.map((link)=> (
                                <a href={link.id}
                                    className='text-base font-bold transition-all duration-300 inset-0'
                                >
                                    {link.label}
                                </a>
                            ))
                        }
                    </nav>

                    {/* Authorization links */}
                    <nav className='hidden md:flex items-center gap-7 bg-transparent'>
                        {/* {isLoggedIn ? (
                        <>
                            <Nav.Link href="/profile">
                                <FaIdCardAlt size={42} />
                            </Nav.Link>
                            <Nav.Link onClick={handleLogout}>
                                <AiOutlineLogout size={42} />
                            </Nav.Link>
                        </>
                    ) : ( */}
                        <>
                            <Nav.Link href="/register">
                                <FaUserPlus size={42} />
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <AiOutlineLogin size={42} />
                            </Nav.Link>
                        </>
                        {/* )} */}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='md:hidden p-4 text-emerald-700 hover:text-cyan-400 transition-colors'
                        aria-label='menu'
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <PiXBold size={45}/> : <MdMenu size={45} /> }
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div
                    className='backdrop-blur-lg'
                >
                    {
                        NAVS.map((link)=> (
                            <a key={link.id} href={link.id}
                                    className='block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300'
                            >
                                {link.label}
                            </a>

                        ))
                    }

                    <hr />

                    {/* <div> */}
                        {/* {isLoggedIn ? (
                        <>
                            <Nav.Link className='px-4 py-3 transition-all duration-300' href="/profile">
                                <FaIdCardAlt size={42} />
                            </Nav.Link>
                            <Nav.Link className='px-4 py-3 transition-all duration-300' onClick={handleLogout}>
                                <AiOutlineLogout size={42} />
                            </Nav.Link>
                        </>
                    ) : ( */}
                            <Nav.Link className='px-4 py-3 transition-all duration-300' href="/login">
                                <AiOutlineLogin size={42} />
                            </Nav.Link>
                        {/* )} */}
                    {/* </div> */}

                </div>
            </div>
        </nav>
        </header>
    )
}

export default Header;