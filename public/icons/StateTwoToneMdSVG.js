import React from 'react';

const StateTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M14 2C14.5523 2 15 2.44772 15 3V4H16C16.5523 4 17 4.44772 17 5H19C19.7956 5 20.5587 5.31607 21.1213 5.87868C21.6839 6.44129 22 7.20435 22 8V17.64C22 19.0616 21.4353 20.4249 20.4301 21.4301C19.4249 22.4353 18.0616 23 16.64 23H7.36C5.93844 23 4.5751 22.4353 3.5699 21.4301C2.5647 20.4249 2 19.0616 2 17.64V8C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5H7C7 4.44772 7.44772 4 8 4H9V3C9 2.44772 9.44772 2 10 2H14Z'
                fill={color}
            />
            <path d='M8 12H16V14H8V12Z' fill='#040A1F' />
            <path d='M10 16H14V18H10V16Z' fill='#040A1F' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 3C8 1.89543 8.89543 1 10 1H14C15.1046 1 16 1.89543 16 3C17.1046 3 18 3.89543 18 5V7C18 8.10457 17.1046 9 16 9H8C6.89543 9 6 8.10457 6 7V5C6 3.89543 6.89543 3 8 3ZM14 3H10V5H8V7H16V5H14V3Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default StateTwoToneMdSVG;
