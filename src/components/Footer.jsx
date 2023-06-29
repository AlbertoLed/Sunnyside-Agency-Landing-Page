import React from 'react'
import sunnysideLogo from '../../public/images/logo-cyan.svg'
import facebookIcon from '../../public/images/icon-facebook.svg'
import instagramIcon from '../../public/images/icon-instagram.svg'
import twitterIcon from '../../public/images/icon-twitter.svg'
import pinterestIcon from '../../public/images/icon-pinterest.svg'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={sunnysideLogo} alt='Sunnyside logo' />
            <div className='footer__info'>
                <a className='footer__anchor' href="">About</a>
                <a className='footer__anchor' href="">Services</a>
                <a className='footer__anchor' href="">Projects</a>
            </div>
            <div className='footer__contacts'>
                <a className='footer__contact' href="">
                    <img src={facebookIcon} alt='Facebook icon' />
                </a>
                <a className='footer__contact' href="">
                    <img src={instagramIcon} alt='Instagram icon' />
                </a>
                <a className='footer__contact' href="">
                    <img src={twitterIcon} alt='Twitter icon' />
                </a>
                <a className='footer__contact' href="">
                    <img src={pinterestIcon} alt='Pinterest icon' />
                </a>
            </div>
        </footer>
    )
}

export default Footer