import React from 'react'
import Textcard from './Textcard'
import imgTransform from '../../public/images/mobile/image-transform.jpg'
import imgStandOut from '../../public/images/mobile/image-stand-out.jpg'
import './Info.css'
import { cardtext } from '../data'

function Info() {

    const textcards = cardtext.map( item =>
        <Textcard 
            key={item.id}
            {...item}
        />
    )

    return (
        <section className='main-section'>
            <img className='main-section__img' src={imgTransform} alt='Image transform' />
            {textcards[0]}
            <img className='main-section__img' src={imgStandOut} alt='Image stand out' />
            {textcards[1]}
            <p>texto e imagen</p>
            <p>texto e imagen</p>
        </section>
    )
}

export default Info