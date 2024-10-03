import React from 'react';
import './Intro.css'; import image from '../../assests/image.png'
import resume from '../../assests/resume.png';
import resumepdf from '../../assests/file_pdf.pdf'

const Intro = () => {
    return (
        <section id='Intro'>
            <div className='IntroContent'>
                <span className='Hello'>Hello,</span>
                <span className='IntroText'>I'm <span className='IntroName'>Manav Shah</span><br />Software Developer</span>
                <p className='IntroPara'>
                    I am a skilled and passionate react developer with experience in creating <br />visually appealing and user-friendly websites and mobile application.
                </p>
                <button className='Resume'><img src={resume} alt='resume' className='ResumeIcon'/><a href={resumepdf} download= 'resume' style={{color: 'black'}}>Resume</a></button>
            </div>
            <img src={image} alt='main person' className='mainImage' />
        </section>
    )
}

export default Intro