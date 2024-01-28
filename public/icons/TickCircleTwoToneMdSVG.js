import React from 'react';

const TickCircleTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.1757 9.26285C17.5828 9.63604 17.6103 10.2686 17.2372 10.6757L12.4429 15.9058C11.6735 16.7452 10.3595 16.7737 9.55437 15.9686L7.29289 13.7071C6.90237 13.3166 6.90237 12.6834 7.29289 12.2929C7.68342 11.9024 8.31658 11.9024 8.70711 12.2929L10.9686 14.5544L15.7628 9.32428C16.136 8.91716 16.7686 8.88965 17.1757 9.26285Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default TickCircleTwoToneMdSVG;
