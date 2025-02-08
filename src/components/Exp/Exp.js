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
                                <p>Jan 2021 – Nov 2022</p>
                            </div>
                            <div className='expdetails'>
                                <ui>
                                    <li>Designed and activated a Firebase-powered cloud-based architecture for real-time data processing and location-based features, enabling
                                        the application to handle high volumes of user data with low latency and deliver a seamless user experience.</li>
                                    <li>Engineered user-centric interfaces aligned with business objectives, facilitating seamless navigation and improving overall user
                                        accessibility by incorporating features such as Screen Reader Compatibility, Adjustable Font Sizes, and High-Contrast Mode.</li>
                                    <li> Resolved complex technical challenges in backend integration, optimizing code efficiency by 10% through techniques like code
                                        refactoring and database indexing, resulting in faster load times and improved overall application performance.</li>
                                    <li>Reduced app crashes by 15% through rigorous testing and proactive bug fixing, ensuring a smoother and more reliable user experience
                                        and increasing user trust in the application.</li>
                                    <li>Boosted user engagement by 35% through enhanced feature functionality, including In-app Messaging, Personalized Recommendations,
                                        Gamification elements, and a more intuitive user interface, driving higher user retention and increased app usage.</li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className='ExpBar'>
                        <div className='ExpBarText'>
                            <div className='ExpBarHead'>
                                <div className='ExpBarHeadd'>
                                    <h2>Java Developer</h2>
                                    <h3>Evozard Pvt. Ltd., Gujurat, India</h3>
                                </div>
                                <p>Jan 2019 – May 2020</p>
                            </div>
                            <div className='expdetails'>
                                <ui>
                                    <li>Engineered and deployed a high-performance Spring Boot microservice that improved data processing speed by 15%, resulting in
                                        significant cost savings for the organization.</li>
                                    <li>Implemented a robust Java-based solution to integrate with third-party APIs, enhancing data exchange capabilities and improving
                                        overall system efficiency.</li>
                                    <li>Successfully debugged and resolved critical production issues in a high-traffic Java application, demonstrating strong problem-solving
                                        and debugging skills.</li>
                                    <li>Conceptualized and enacted a scalable solution for handling high-volume data transactions, utilizing multi-threading and concurrency
                                        concepts to optimize performance and ensure system stability.</li>
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