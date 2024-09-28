import React from 'react';
import './skills.css';
import website from '../../assests/Website Development.png';
import mobile from '../../assests/mobile.png';

const Skills = () => {
    return (
        <section id='skill'>
            <div className='aboutmeSection'>
                <span className='aboutHead'>What I do</span><br />
                <span className='aboutDetail'>
                    Dedicated full-stack developer with a strong foundation in React and React Native, emphasizing creating seamless user experiences across web and mobile platforms.
                    <br/><br/>Mobile application developer with 2 years of hands-on experience in developing and deploying Flutter application using Dart as a Programming language.
                    <br/>
                </span>
                <span className='skillsHead'>Programming Skills</span>
                <div className='SkillBars'>
                    <div className='SkillBar'>
                        <img src={website} alt='website development' className='websiteicon' />
                        <div className='SkillBarText'>
                            <h2>Website Development</h2>
                            <p>HTML, CSS, JavaScript, Python, Node.js, React</p>
                        </div>
                    </div>
                    <div className='SkillBar'>
                        <img src={mobile} alt='mobile application development' className='websiteicon' />
                        <div className='SkillBarText'>
                            <h2>Mobile Application Development</h2>
                            <p>Flutter, Dart, React Native, Kotlin, JAVA, SQLite, Swift, Google Maps API, Firebase</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills