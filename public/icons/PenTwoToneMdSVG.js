import React from 'react';

const PenTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.314 5.68579C17.9234 5.29526 17.9234 4.6621 18.314 4.27157L21.2926 1.29289C21.6832 0.902369 22.3163 0.902369 22.7069 1.29289C23.0974 1.68342 23.0974 2.31658 22.7069 2.70711L19.7282 5.68579C19.3377 6.07631 18.7045 6.07631 18.314 5.68579Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.8886 8.95237C18.2791 8.56184 18.9123 8.56184 19.3028 8.95237L21.1488 10.7984C21.9299 11.5795 21.9299 12.8458 21.1488 13.6268L15.0475 19.7282C14.657 20.1187 14.0238 20.1187 13.6333 19.7282C13.2428 19.3376 13.2428 18.7045 13.6333 18.3139L19.7346 12.2126L17.8886 10.3666C17.498 9.97606 17.498 9.34289 17.8886 8.95237Z'
                fill='#040A1F'
            />
            <path
                d='M18.5861 2.60627C17.7778 1.79792 16.4672 1.79792 15.6589 2.60627L2.58912 15.6759C2.4566 15.8085 2.36398 15.9756 2.32184 16.1582L1.02563 21.7752C0.948099 22.1111 1.04911 22.4633 1.29291 22.7071C1.53672 22.9509 1.88892 23.0519 2.22488 22.9744L7.84166 21.6782C8.02428 21.6361 8.19138 21.5434 8.3239 21.4109L21.3938 8.34123C22.2021 7.53288 22.2021 6.22229 21.3938 5.41394L18.5861 2.60627Z'
                fill={color}
            />
        </svg>
    );
};

export default PenTwoToneMdSVG;