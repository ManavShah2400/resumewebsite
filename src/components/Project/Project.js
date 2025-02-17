import React from 'react';
import './Project.css';

const Project = () => {
    return (
        <section id='Project'>
            <div className='ProjectSection'>
                <span className='ProjHead'>Projects</span>
                <div className='ProjBars'>
                    <div className='ProjBar'>
                        <div className='ProjBarText'>
                            <h2>Automatic Switching System</h2>
                            <h4>IOT System</h4>
                            <div className='Projdetails'>
                                <ui>
                                    <li>Implemented IoT technology to enhance workplace automation by using QR code detection for activating electronic applications.</li>
                                    <li>QR codes were placed on individuals' phones or vehicles, with a scanner positioned at the parking lot entrance.</li>
                                    <li>Additionally, we installed hourly occupancy sensors to monitor office presence. If the sensors detect no occupancy, they trigger a circuit to deactivate previously activated electrical applications.</li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className='ProjBar'>
                        <div className='ProjBarText'>
                            <h2>Unit Conversion Application</h2>
                            <h4>Mobile Application Development</h4>
                            <div className='Projdetails'>
                                <ui>
                                    <li>For this project, I developed a Flutter-based application designed for converting a wide range of units, such as pounds to kilograms, milliliters to liters, and more.</li>
                                    <li>The application includes three core sections: currency conversion, unit conversion, and time zone conversion. </li>
                                    <li>It retrieves real-time exchange rates and global time zone data from the internet to ensure accuracy.</li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className='ProjBar'>
                        <div className='ProjBarText'>
                            <h2>AI-based Lung Cancer Detection</h2>
                            <h4>Data Mining Project</h4>
                            <div className='Projdetails'>
                                <ui>
                                    <li>Installed feature selection and machine learning models to identify critical indicators, optimizing dataset preprocessing.</li>
                                    <li>Designed a scalable system for real-time data analysis, integrating cloud-based solutions to secure and efficiently handle large datasets,
                                        achieving 85% model accuracy.</li>
                                    <li>Generated a data visualization dashboard using Matplotlib to display trends and predictive outcomes for easier interpretation.</li>
                                    <li>Automated the model training and deployment pipeline using TensorFlow to streamline updates and improve scalability.</li>
                                    <li>Enhanced model robustness through techniques such as cross-validation and imbalanced data handling using SMOTE.</li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className='ProjBar'>
                        <div className='ProjBarText'>
                            <h2>SKILLUP</h2>
                            <h4>Personalized Learning Tracker, Mobile Application</h4>
                            <div className='Projdetails'>
                                <ui>
                                    <li>Integrated Firebase authentication (email/password, Google, Facebook) to ensure secure and seamless user access.</li>
                                    <li>Planned and enacted skill management features, including goal setting, progress tracking, and media attachment support, improving user
                                        engagement by 30%.</li>
                                    <li>Developed an analytics dashboard with interactive charts, leveraging data visualization libraries to enhance user insights into progress.</li>
                                    <li>Invented a scalable, responsive UI and exportable progress reports (PDF), improving accessibility and user satisfaction.</li>
                                    <li>Optimized app performance by reducing load times by 20% through state management using Redux and Firebase Realtime Database.</li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className='ProjBar'>
                        <div className='ProjBarText'>
                            <h2>Machine Learning-Powered Recommendation System</h2>
                            <h4>Python</h4>
                            <div className='Projdetails'>
                                <ui>
                                    <li>Developed a personalized product recommendation system for an online retail platform using Python and machine learning libraries
                                        such as scikit-learn, TensorFlow.</li>
                                    <li>Implemented collaborative filtering and content-based filtering algorithms to analyze user behavior and product attributes,
                                        generating relevant product suggestions.</li>
                                    <li>Built a RESTful API using Flask (Python) to expose the recommendation engine to the frontend application.</li>
                                    <li>Deployed the model as a microservice using Docker and orchestrated it with Kubernetes for scalability and efficient resource
                                        management.</li>
                                    <li>Continuously monitored model performance and re-trained the model periodically using new user data to improve recommendation
                                        accuracy.</li>
                                </ui>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project