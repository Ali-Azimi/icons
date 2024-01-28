import React from 'react';

const CompanyEstablishmentDateTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 3C2.34315 3 1 4.34315 1 6V17C1 20.3137 3.68629 23 7 23H17C20.3137 23 23 20.3137 23 17V6C23 4.34315 21.6569 3 20 3H4Z'
                fill={color}
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M23 11H5V9H23V11Z' fill='#040A1F' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C7.55228 1 8 1.44772 8 2V5C8 5.55229 7.55228 6 7 6C6.44772 6 6 5.55229 6 5V2C6 1.44772 6.44772 1 7 1Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 1C17.5523 1 18 1.44772 18 2V5C18 5.55229 17.5523 6 17 6C16.4477 6 16 5.55229 16 5V2C16 1.44772 16.4477 1 17 1Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default CompanyEstablishmentDateTwoToneMdSVG;
