import React from 'react';

const IssueBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M10.1208 2.31298C10.7598 0.562334 13.2402 0.562347 13.8792 2.31298L16.0747 8.32857C16.1938 8.65476 15.9523 9 15.6051 9H8.39496C8.04772 9 7.80621 8.65476 7.92526 8.32857L10.1208 2.31298Z'
                fill={color}
            />
            <path
                d='M17 11C17.0293 11 17.0562 11.0176 17.0662 11.0452L18.2646 14.3286C18.3837 14.6548 18.1422 15 17.7949 15H6.20508C5.85785 15 5.61634 14.6548 5.73539 14.3286L6.93377 11.0451C6.94383 11.0176 6.97066 11 7 11H17Z'
                fill={color}
            />
            <path
                d='M5.11015 17C4.90011 17 4.71247 17.1313 4.64045 17.3286L3.30046 21H2C1.44772 21 1 21.4477 1 22C1 22.5523 1.44772 23 2 23H22C22.5523 23 23 22.5523 23 22C23 21.4477 22.5523 21 22 21H20.6996L19.3095 17.1914C19.2641 17.067 19.1323 17 19 17H5.11015Z'
                fill={color}
            />
        </svg>
    );
};

export default IssueBoldMdSVG;