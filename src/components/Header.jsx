import React from 'react'
import './Header.css'
import sunnysideLogo from '../../public/images/logo.svg'
import navBtn from '../../public/images/icon-hamburger.svg'
import iconArrowDown from '../../public/images/icon-arrow-down.svg'



function Header() {

    const [isMobileNavShowed, setIsMobileNavShowed] = React.useState(false)

    function handleMobileNav() {
        setIsMobileNavShowed(prev => !prev)
    }

    return(
        <header className='header'>
            <nav className='nav'>
                <img className='nav__logo' src={sunnysideLogo} alt="Sunnyside logo" />
                <ul className='desktop-nav'>
                    <li className='desktop-nav__btn desktop-nav__btn--menu'>About</li>
                    <li className='desktop-nav__btn desktop-nav__btn--menu'>Services</li>
                    <li className='desktop-nav__btn desktop-nav__btn--menu'>Projects</li>
                    <li className='desktop-nav__btn desktop-nav__btn--contact'>Contact</li>
                </ul>
                {<div 
                    className={`mobile-nav 
                            ${isMobileNavShowed ? 
                            `mobile-nav-visible` : 
                            `mobile-nav-hidden`}`}>
                    <div className='mobile-nav__triangle'></div>
                    <ul className='mobile-nav__list'>
                        <li className='mobile-nav__btn mobile-nav__btn--menu'>About</li>
                        <li className='mobile-nav__btn mobile-nav__btn--menu'>Services</li>
                        <li className='mobile-nav__btn mobile-nav__btn--menu'>Projects</li>
                        <li className='mobile-nav__btn mobile-nav__btn--contact'>Contact</li>
                    </ul>
                </div>}
                <img 
                    className='mobile-nav-launcher' 
                    src={navBtn}
                    onClick={handleMobileNav} />
            </nav>
            <div className='header__content'>
                <h1 className='header__title'>We are creatives</h1>
                <img className='header__arrow-icon' src={iconArrowDown} />
            </div>
        </header>
    )
}

export default Header