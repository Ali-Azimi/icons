import React from 'react';

const SupportTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M20.9752 17C21.5412 17 22 16.5412 22 15.9752V11H19C17.3431 11 16 12.3431 16 14C16 15.6569 17.3431 17 19 17H20.9752Z'
                fill={color}
            />
            <path d='M5 11H2V17H5C6.65685 17 8 15.6569 8 14C8 12.3431 6.65685 11 5 11Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 3C7.58172 3 4 6.58172 4 11V17H2V11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11V16C22 19.3137 19.3137 22 16 22H15C15 22.5523 14.5523 23 14 23C13.4477 23 13 22.5523 13 22V19C13 18.4477 13.4477 18 14 18C14.5523 18 15 18.4477 15 19V20H16C18.2091 20 20 18.2091 20 16V11C20 6.58172 16.4183 3 12 3Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default SupportTwoToneMdSVG;
