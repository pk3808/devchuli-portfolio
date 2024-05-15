import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div style={pageContentStyle}>
                <h2 style={headingStyle}>Contact Devchuli Beverage</h2>
                <p style={paragraphStyle}>If you have any questions or inquiries, feel free to contact us:</p>
                <ul style={listStyle}>
                    <li>Email: nawalumbini@gmail.com</li>
                    <li>Phone: +977-9847093427</li>
                    <li>Address: Kathmandu, Nepal</li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;

const pageContentStyle = {
    padding: '20px',
    border: '5px solid #dddd',
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

