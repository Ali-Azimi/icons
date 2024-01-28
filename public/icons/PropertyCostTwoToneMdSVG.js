import React from 'react';

const PropertyCostTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M12 4.41968V13H19V9C19 8.64114 18.8077 8.3098 18.4961 8.13176L12 4.41968Z' fill={color} />
            <path d='M7 21V14C7 13.4477 7.44772 13 8 13H10V3H3V21H7Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 19V17C10.1046 17 11 16.1046 11 15H19C19 16.1046 19.8954 17 21 17V19C19.8954 19 19 19.8954 19 21H11C11 19.8954 10.1046 19 9 19ZM16 18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18Z'
                fill={color}
            />
            <path
                d='M15 19C15.5523 19 16 18.5523 16 18C16 17.4477 15.5523 17 15 17C14.4477 17 14 17.4477 14 18C14 18.5523 14.4477 19 15 19Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2 1C1.44772 1 1 1.44772 1 2V22C1 22.5523 1.44772 23 2 23H22C22.5523 23 23 22.5523 23 22V14C23 13.4477 22.5523 13 22 13H12V2C12 1.44772 11.5523 1 11 1H2ZM7 14V21H3V3H10V13H8C7.44772 13 7 13.4477 7 14ZM9 17V19C10.1046 19 11 19.8954 11 21H19C19 19.8954 19.8954 19 21 19V17C19.8954 17 19 16.1046 19 15H11C11 16.1046 10.1046 17 9 17Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default PropertyCostTwoToneMdSVG;
