import React from 'react'
import Textcard from './Textcard.jsx'
import TextImgcard from './TextImgcard.jsx'
import imgTransform from '../../public/images/mobile/image-transform.jpg'
import imgStandOut from '../../public/images/mobile/image-stand-out.jpg'
import './Info.css'
import { cardtext, cardtextImg } from '../data.js'

function Info() {

    // create Textcard components
    const textcards = cardtext.map( item =>
        <Textcard 
            key = {item.id}
            {...item}
        />
    )

    // create TextImgcard components
    const textimgcards =  cardtextImg.map( item =>
        <TextImgcard 
            key = {item.id}
            {...item}
        />
    )
    

    return (
        <section className='main-section'>
            <img className='main-section__img' src={imgTransform} alt='Image transform' />
            {textcards[0]}
            <img className='main-section__img' src={imgStandOut} alt='Image stand out' />
            {textcards[1]}
            {textimgcards[0]}
            {textimgcards[1]}
        </section>
    )
}

export default Info