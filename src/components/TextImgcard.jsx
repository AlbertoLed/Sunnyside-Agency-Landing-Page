import React from 'react'
import './TextImgcard.css'

function TextImgcard(props) {
    const { title, paragraph, img, textcolor } = props

    let txtcolorClass;
    if(textcolor === 'cyan') {
        txtcolorClass = 'img-card__text--cyan'
    }
    else if(textcolor === 'blue') {
        txtcolorClass = 'img-card__text--blue'
    }
    const imgClass = img === 'image-graphic-design.jpg' ? 'img-card--graphic' : 'img-card--photography'

    return (
        <div className={`img-card ${imgClass}`}>
            <div className='img-card__text'>
                <h2 className={`img-card__title ${txtcolorClass}`}>{title}</h2>
                <p className={`img-card__paragraph ${txtcolorClass}`}>{paragraph}</p>
            </div>
        </div>
    )
}

export default TextImgcard