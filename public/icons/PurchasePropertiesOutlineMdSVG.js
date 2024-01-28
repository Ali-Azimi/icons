import React from 'react';

const PurchasePropertiesOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 5C6.44772 5 6 5.44772 6 6V13H4V6C4 4.34315 5.34315 3 7 3H19C21.2091 3 23 4.79086 23 7V8C23 9.65685 21.6569 11 20 11H19.5V9H20C20.5523 9 21 8.55228 21 8V7C21 5.89543 20.1046 5 19 5C18.4477 5 18 5.44772 18 6V17C18 19.2091 16.2091 21 14 21H5C2.79086 21 1 19.2091 1 17C1 15.8954 1.89543 15 3 15H11C11.5523 15 12 15.4477 12 16V17C12 18.1046 12.8954 19 14 19C15.1046 19 16 18.1046 16 17V5H7ZM10 17C10 17.7286 10.1948 18.4117 10.5351 19H5C3.89543 19 3 18.1046 3 17H10Z'
                fill={color}
            />
            <path d='M9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H9Z' fill={color} />
            <path
                d='M8 12C8 11.4477 8.44772 11 9 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H9C8.44772 13 8 12.5523 8 12Z'
                fill={color}
            />
        </svg>
    );
};

export default PurchasePropertiesOutlineMdSVG;
