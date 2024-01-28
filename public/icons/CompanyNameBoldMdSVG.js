import React from 'react';

const CompanyNameBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 1C21.5523 1 22 1.44772 22 2V3C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5V22C22 22.5523 21.5523 23 21 23C20.4477 23 20 22.5523 20 22V5H15V7H17C17.5523 7 18 7.44772 18 8V17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17V8C2 7.44772 2.44772 7 3 7H5V5H2C1.44772 5 1 4.55228 1 4C1 3.44772 1.44772 3 2 3H5C5 2.44772 5.44772 2 6 2C6.55228 2 7 2.44772 7 3H13C13 2.44772 13.4477 2 14 2C14.5523 2 15 2.44772 15 3H20V2C20 1.44772 20.4477 1 21 1ZM7 5V7H13V5H7ZM7.5 11.5C6.94772 11.5 6.5 11.9477 6.5 12.5C6.5 13.0523 6.94772 13.5 7.5 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5C13.5 11.9477 13.0523 11.5 12.5 11.5H7.5Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyNameBoldMdSVG;
