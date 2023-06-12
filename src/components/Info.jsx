import React from 'react'
import imgTransform from '../../public/images/mobile/image-transform.jpg'
import imgStandOut from '../../public/images/mobile/image-stand-out.jpg'

function Info() {
    return (
        <section>
            <img src={imgTransform} alt='Image transform' />
            <p>texto</p>
            <img src={imgStandOut} alt='Image stand out' />
            <p>texto</p>
            <p>texto e imagen</p>
            <p>texto e imagen</p>
        </section>
    )
}

export default Info