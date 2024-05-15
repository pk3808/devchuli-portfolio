import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <div style={pageContentStyle}>
                <h2 style={headingStyle}>About Devchuli Beverage</h2>
                <p style={paragraphStyle}>Devchuli Beverage is a leading water supply company based in the beautiful landscapes of Nepal. Our journey began with a vision to provide pure and safe drinking water to every household, ensuring the health and well-being of our community.</p>
                <p style={paragraphStyle}>We pride ourselves on our commitment to quality. Our water goes through rigorous filtration processes, adhering to international standards to ensure that every drop is clean and refreshing.</p>
                <p style={paragraphStyle}>At Devchuli Beverage, sustainability is at the core of our operations. We understand the importance of preserving our environment for future generations. That's why we invest in eco-friendly practices, from efficient water usage to responsible packaging.</p>
                <p style={paragraphStyle}>Beyond delivering water, we strive to make a positive impact on society. Through community initiatives and partnerships, we support education, health, and environmental conservation efforts.</p>
                <p style={paragraphStyle}>Founded by Raju Bhatta, Devchuli Beverage has been dedicated to its mission since its inception. Raju's passion for providing clean water and his commitment to social responsibility have guided the company's growth and success.</p>
                <p style={paragraphStyle}>Join us in our mission to quench thirst, promote health, and protect nature. Together, we can create a brighter, hydrated future for all.</p>
            </div>
        </div>
    );
};

export default About;

const pageContentStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '20px',
};

const headingStyle = {
    fontSize: '34px',
    marginBottom: '16px',
    color: '#333',
};

const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '12px',
    color: 'black',
};
