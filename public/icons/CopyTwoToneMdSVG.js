import React from 'react';

const CopyTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M9 2C7.89543 2 7 2.89543 7 4V5H5C3.34315 5 2 6.34315 2 8V20C2 21.6569 3.34315 23 5 23H15C16.6569 23 18 21.6569 18 20V18H19C20.1046 18 21 17.1046 21 16V8C21 4.68629 18.3137 2 15 2H9Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 1C7.34315 1 6 2.34315 6 4V16C6 17.6569 7.34315 19 9 19H19C20.6569 19 22 17.6569 22 16V8C22 4.13401 18.866 1 15 1H9ZM14 3H9C8.44772 3 8 3.44772 8 4V16C8 16.5523 8.44772 17 9 17H19C19.5523 17 20 16.5523 20 16V9H18C15.7909 9 14 7.20914 14 5V3ZM19.9 7C19.5028 5.04343 17.9632 3.50173 16.0077 3.10158C16.0051 3.10106 16.0026 3.10054 16 3.10002V5C16 6.10457 16.8954 7 18 7H19.9Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default CopyTwoToneMdSVG;
