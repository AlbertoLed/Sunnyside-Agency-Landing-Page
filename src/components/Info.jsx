import React from 'react'
import Textcard from './Textcard.jsx'
import TextImgcard from './TextImgcard.jsx'
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
            <div className='main-section__img main-section__img--transform'></div>
            {textcards[0]}
            <div className='main-section__img main-section__img--stand'></div>
            {textcards[1]}
            {textimgcards[0]}
            {textimgcards[1]}
        </section>
    )
}

export default Info