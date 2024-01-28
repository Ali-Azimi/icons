import React from 'react';

const CompanyEstablishmentDateOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H20C21.6569 3 23 4.34315 23 6V17C23 20.3137 20.3137 23 17 23H7C3.68629 23 1 20.3137 1 17V6C1 4.34315 2.34315 3 4 3H6V2C6 1.44772 6.44772 1 7 1ZM16 5V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V5H20C20.5523 5 21 5.44772 21 6V9H5V11H21V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V6C3 5.44772 3.44772 5 4 5H6V6C6 6.55228 6.44772 7 7 7C7.55228 7 8 6.55228 8 6V5H16Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyEstablishmentDateOutlineMdSVG;
