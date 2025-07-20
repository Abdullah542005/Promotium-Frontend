import DesktopNavbar from './DesktopNavbar'
import './Navbar.css'

export default function Navbar(){
    const isMobile = window.innerWidth <= 768;
    return isMobile ? '' : <DesktopNavbar />;
}