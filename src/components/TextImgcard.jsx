import React from 'react'
import './TextImgcard.css'

function TextImgcard(props) {
    const { title, paragraph, mobileImg, textcolor } = props

    let txtcolorClass;
    if(textcolor === 'cyan') {
        txtcolorClass = 'img-card__text--cyan'
    }
    else if(textcolor === 'blue') {
        txtcolorClass = 'img-card__text--blue'
    }

    return (
        <div className='img-card'>
            <img className='img-card__img' src={mobileImg} />
            <div className='img-card__text'>
                <h2 className={`img-card__title ${txtcolorClass}`}>{title}</h2>
                <p className={`img-card__paragraph ${txtcolorClass}`}>{paragraph}</p>
            </div>
        </div>
    )
}

export default TextImgcard