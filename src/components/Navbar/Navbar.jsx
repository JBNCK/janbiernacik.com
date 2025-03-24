import './Navbar.css';
import isGerman from '../../scripts/is-german';

function Navbar() {
    let menuOpen = false;
    const componentContent = isGerman() ? {

    } : {

    }

    function toggleMenu() {
        if (menuOpen) {

        } else {

        }
    }

    return (
        <>
            <div id='navbar'>
                <div id='navbar-content'>
                    <div id='navbar-items-left'></div>
                    <div id='navbar-items-right'>
                    <i className="bi bi-list navbar-icon"></i>
                    </div>
                </div>
            </div>
            <div id='menu'>
                <i class="bi bi-x menu-icon"></i>
                <a className='menu-link' href='/'>Startseite</a>
                <a className='menu-link' href='https://biernacik.dev'><i class="bi bi-arrow-right"></i> biernacik.dev</a>
            </div>
        </>
    )
}

export default Navbar;