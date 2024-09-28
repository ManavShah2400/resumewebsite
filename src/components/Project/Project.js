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
                            <ui>
                                <li>Implemented IoT technology to enhance workplace automation by using QR code detection for activating electronic applications.</li>
                                <li>QR codes were placed on individuals' phones or vehicles, with a scanner positioned at the parking lot entrance.</li>
                                <li>Additionally, we installed hourly occupancy sensors to monitor office presence. If the sensors detect no occupancy, they trigger a circuit to deactivate previously activated electrical applications.</li>
                            </ui>
                        </div>
                    </div>
                    <div className='ProjBar'>
                        <div className='ProjBarText'>
                            <h2>Unit Conversion Application</h2>
                            <h4>Mobile Application Development</h4>
                            <ui>
                                <li>For this project, I developed a Flutter-based application designed for converting a wide range of units, such as pounds to kilograms, milliliters to liters, and more.</li>
                                <li>The application includes three core sections: currency conversion, unit conversion, and time zone conversion. </li>
                                <li>It retrieves real-time exchange rates and global time zone data from the internet to ensure accuracy.</li>
                            </ui>
                        </div>
                    </div>
                    <div className='ProjBar'>
                        <div className='ProjBarText'>
                            <h2>Blood Donation Database</h2>
                            <h4>Database</h4>
                            <ui>
                                <li>Developed the back-end system for a Blood Donation Drive project during a university Database course.</li>
                                <li>Designed a user registration form to collect personal details and blood type, while implementing an automated notification system to alert eligible donors during emergencies.</li>
                                <li>Leveraged an algorithm to prioritize donors based on their donation history, improving response times and the efficiency of the donation process.</li>
                            </ui>
                        </div>
                    </div>
                    <div className='ProjBar'>
                        <div className='ProjBarText'>
                            <h2>Cancer Prediction</h2>
                            <h4>Data Mining (Machine Learning)</h4>
                            <ui>
                                <li>Assisted in the development of cross-platform mobile applications using Flutter,
                                    contributing to both front-end and back-end tasks.</li>
                            </ui>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project