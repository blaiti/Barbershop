import React from 'react';

import './styles.css';

function ServiceCard ({ active, icon, title, description }) {
    return (
        <div className="service-container" style={active ? {backgroundColor: '#212123', color: '#FFFFFF'} : null}>
            <div className='card-icon'>
                <img 
                    src={icon}
                    alt={title} />
            </div>
            
            <div className='card-details'>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>

            <a>See More</a>
        </div>
    );
}

export default ServiceCard;