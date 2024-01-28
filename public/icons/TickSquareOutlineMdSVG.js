import React from 'react';

const TickSquareOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M17.2372 9.67572C17.6103 9.26861 17.5828 8.63604 17.1757 8.26285C16.7686 7.88965 16.136 7.91716 15.7628 8.32428L10.9686 13.5544L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L11.0314 16.4456L17.2372 9.67572Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C3.68629 1 1 3.68629 1 7V17C1 20.3137 3.68629 23 7 23H17C20.3137 23 23 20.3137 23 17V7C23 3.68629 20.3137 1 17 1H7ZM3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z'
                fill={color}
            />
        </svg>
    );
};

export default TickSquareOutlineMdSVG;
