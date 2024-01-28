import React from 'react';

const MotorcycleOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4V6C15 6.55228 15.4477 7 16 7C16.5523 7 17 6.55228 17 6H17.192C17.5893 6 17.9489 6.23519 18.1081 6.59918L20.471 12H20H9.443L10.1816 10.0303C10.3922 9.46889 10.5 8.87422 10.5 8.27466V8C10.5 6.34315 9.15685 5 7.5 5H3C2.44772 5 2 5.44772 2 6V9C2 9.55228 2.44772 10 3 10H3.10102C1.80447 11.2705 1 13.0413 1 15C1 16.1046 1.89543 17 3 17C3 19.2091 4.79086 21 7 21C9.20914 21 11 19.2091 11 17H14.0836C14.0286 17.3251 14 17.6592 14 17.9998H16.0161C16.0161 15.8067 17.7953 14.0258 20 14.0001V14H20.471C21.9133 14 22.8814 12.5197 22.3033 11.1984L19.9404 5.79754C19.4627 4.70558 18.3839 4 17.192 4L17 4ZM15.5399 14H9.443C8.04659 14 7.08003 12.6053 7.57034 11.2978L8.057 10H8C5.23858 10 3 12.2386 3 15H14.8091C15.018 14.6416 15.2633 14.3066 15.5399 14ZM7.5 7C8.05228 7 8.5 7.44772 8.5 8H8H4V7H7.5ZM7 19C5.89543 19 5 18.1046 5 17H9C9 18.1046 8.10457 19 7 19ZM19 18C19 17.4477 19.4477 17 20 17C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18ZM20 15C18.3431 15 17 16.3431 17 18C17 19.6569 18.3431 21 20 21C21.6569 21 23 19.6569 23 18C23 16.3431 21.6569 15 20 15Z'
                fill={color}
            />
        </svg>
    );
};

export default MotorcycleOutlineMdSVG;