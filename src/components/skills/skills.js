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
                    Highly motivated and results-oriented Full Stack Developer with 3 years of experience in designing, developing, and deploying robust and scalable web and mobile applications.
                    <br /><br /> Proven expertise in Java, Python, JavaScript, and a strong foundation in frontend technologies like React, Angular, and backend frameworks like Spring Boot. Experience in cross-platform development using React Native and Flutter, along
                    with proficiency in cloud platforms (GCP, AWS) and DevOps principles. Eager to contribute to innovative projects and continuously learn new
                    technologies to stay at the forefront of the industry.
                    <br />
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

