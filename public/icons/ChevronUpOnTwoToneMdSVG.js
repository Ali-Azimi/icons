import React from 'react';

const ChevronUpOnTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L16.7071 12.2929C17.0976 12.6834 17.0976 13.3166 16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071L12 10.4142L8.70711 13.7071C8.31658 14.0976 7.68342 14.0976 7.29289 13.7071C6.90237 13.3166 6.90237 12.6834 7.29289 12.2929L11.2929 8.29289Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ChevronUpOnTwoToneMdSVG;
