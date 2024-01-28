import React from 'react';

const MobileTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.82788 1C6.18507 1 5 2.42601 5 3.99601V20.004C5 21.574 6.18507 23 7.82788 23H16.1721C17.8149 23 19 21.574 19 20.004V3.99601C19 2.42601 17.8149 1 16.1721 1H7.82788Z'
                fill={color}
            />
            <path d='M19 5H5V7H19V5Z' fill='#040A1F' />
            <path
                d='M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default MobileTwoToneMdSVG;
