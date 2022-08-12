import React from 'react';

import './styles.css';

function PunchlineCard({icon, title, description }) {
    return (
        <div className="punchline-container">
            <div className='card-icon'>
                <img 
                    src={icon}
                    alt={title} />
            </div>
            <div className='card-details'>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default PunchlineCard;