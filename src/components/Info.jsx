import React from 'react'
import Textcard from './Textcard.jsx'
import TextImgcard from './TextImgcard.jsx'
import './Info.css'
import { cardtext, cardtextImg } from '../data.js'

function Info() {

    const [transformIntersectionCount, setTransformIntersectionCount] = React.useState(0)
    const imgTransformRef = React.useRef()
    React.useEffect(() => {
        const observe = new IntersectionObserver(() => {
            setTransformIntersectionCount(prev => prev + 1)
        })
        observe.observe(imgTransformRef.current)
    }, [])

    const [standIntersectionCount, setStandIntersectionCount] = React.useState(0)
    const imgStandRef = React.useRef()
    React.useEffect(() => {
        const observe = new IntersectionObserver(() => {
            setStandIntersectionCount(prev => prev + 1)
        })
        observe.observe(imgStandRef.current)
    }, [])


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
            <div 
                className={`main-section__img main-section__img--transform 
                    ${transformIntersectionCount >= 2 && `main-section__img--animation`}`}
                ref={imgTransformRef}
            ></div>
            {textcards[0]}
            <div 
                className={`main-section__img main-section__img--stand
                    ${standIntersectionCount >= 2 && `main-section__img--animation`}`}
                ref={imgStandRef}
            ></div>
            {textcards[1]}
            {textimgcards[0]}
            {textimgcards[1]}
        </section>
    )
}

export default Info