import React from 'react';
import Navbar from './Navbar';

const Services = () => {
    return (
        <div>
            <Navbar />
            <div style={pageContentStyle}>
                <h2 style={headingStyle}>Our Services</h2>
                <p style={paragraphStyle}>Devchuli Beverage offers the following services:</p>
                <ul style={listStyle}>
                    <li>Extraction of fresh water from natural sources</li>
                    <li>Advanced water filtration and purification</li>
                    <li>Bottling and labeling of water</li>
                    <li>Supplying purified water to retailers</li>
                </ul>
                <p style={paragraphStyle}>We are committed to providing our customers with safe, clean, and refreshing drinking water.</p>
            </div>
        </div>
    );
};

export default Services;

const pageContentStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '20px',
};

const headingStyle = {
    fontSize: '24px',
    marginBottom: '16px',
    color: '#333',
};

const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '12px',
    color: '#666',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

