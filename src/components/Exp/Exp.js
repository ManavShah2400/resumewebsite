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
                                    <h2>Full-Stack Developer</h2>
                                    <h3>Target, United States</h3>
                                </div>
                                <p>Jul 2023 – Present</p>
                            </div>
                            <div className='expdetails'>
                                <ui>
                                    <li>Developed and deployed a high-performance e-commerce platform, utilizing React for frontend,
                                        Spring Boot for backend, and a MySQL database, resulting in a 15% increase in user conversion rates
                                        and a 10% reduction in page load times.</li>
                                    <li>Successfully migrated a critical legacy application to a cloud-native architecture on AWS, leveraging
                                        Docker, Kubernetes, and CI/CD pipelines, leading to a 30% reduction in operational costs and a 20%
                                        improvement in application performance (reduced latency by 15%).</li>
                                    <li>Designed and implemented a RESTful API, utilizing Node.js and Express.js, to power a mobile
                                        application, resulting in a 20% increase in user engagement, a 10% reduction in API response times,
                                        and improved data synchronization across platforms.</li>
                                    <li>Architectured and integrated a machine learning model, utilizing Python, TensorFlow, and NumPy, into
                                        a recommendation system, resulting in a 5% increase in average order value, a 20% improvement in
                                        customer satisfaction, and a 12% increase in click-through rates for recommended products.</li>
                                </ui>
                            </div>
                        </div>
                    </div>
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

                </div>
            </div>
        </section>
    )
}

export default Exp