import React from 'react';
import './Exp.css';

const Exp = () => {
    return (
        <section id='Experience'>
            <div className='ExperienceSection'>
                <span className='ExpHead'>Job Experience</span>
                <div className='ExpBars'>
                    <div className='ExpBar'>
                        <div className='ExpBarText'>
                            <div className='ExpBarHead'>
                                <div className='ExpBarHeadd'>
                                    <h2>Mobile Application Developer</h2>
                                    <h3>BlueBox Infosoft Pvt. Ltd., Gujurat, India</h3>
                                </div>
                                <p>Jun 2021 – Nov 2022</p>
                            </div>
                            <div className='expdetails'>
                                <ui>
                                    <li>Developed and maintained a consistent and high quality user experience by strictly stick to design
                                        guidelines and industry best practices.</li>
                                    <li>Designed and implemented responsive and adaptive UIs to provide a seamless and
                                        consistent user experience across various devices and screen sizes.</li>
                                    <li> Continuously improved app quality by staying current with the latest trans and technologies in
                                        mobile application development.</li>
                                    <li>Regularly released updates that included bug fixes, performance enhancements, and
                                        new features to keep the application competitive and user- friendly.</li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className='ExpBar'>
                        <div className='ExpBarText'>
                            <div className='ExpBarHead'>
                                <div className='ExpBarHeadd'>
                                    <h2>React Developer Intern</h2>
                                    <h3>Evozard Pvt. Ltd., Gujurat, India</h3>
                                </div>
                                <p>Jan 2021 – May 2021</p>
                            </div>
                            <div className='expdetails'>
                                <ui>
                                    <li>Contributed to the creation of a responsive web application using React.js, resulting in a 30% boost in user engagement metrics.</li>
                                    <li>Engaged in the testing and debugging of React applications, achieving a successful bug resolution rate of 95% prior to final deployment.</li>
                                    <li>Identified and resolved more than 10 technical challenges, implementing solutions that improved functionality and reduced technical debt by 25%.</li>
                                    <li>Collaborated with team members to collect user feedback, which informed design enhancements and feature improvements, further increasing user satisfaction.</li>
                                    <li>Developed comprehensive documentation for the codebase and created user manuals, leading to a 50% reduction in onboarding time for new developers.</li>
                                </ui>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exp