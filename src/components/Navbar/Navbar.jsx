import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { useState, useEffect } from 'react';
import './Navbar.css'

export default function Navbar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 769);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}