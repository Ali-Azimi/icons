import React from 'react';

const PropertyAgeBoldSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M9.75 2C9.75 1.58579 9.41421 1.25 9 1.25C8.58579 1.25 8.25 1.58579 8.25 2V3.25H4.75V2C4.75 1.58579 4.41421 1.25 4 1.25C3.58579 1.25 3.25 1.58579 3.25 2V3.25H2C1.58579 3.25 1.25 3.58579 1.25 4V11C1.25 11.4142 1.58579 11.75 2 11.75H11C11.4142 11.75 11.75 11.4142 11.75 11V4C11.75 3.58579 11.4142 3.25 11 3.25H9.75V2Z'
                fill={color}
            />
            <path
                d='M14.75 8C14.75 7.58579 14.4142 7.25 14 7.25C13.5858 7.25 13.25 7.58579 13.25 8V13.25H6C5.58579 13.25 5.25 13.5858 5.25 14C5.25 14.4142 5.58579 14.75 6 14.75H14C14.4142 14.75 14.75 14.4142 14.75 14V8Z'
                fill={color}
            />
        </svg>
    );
};

export default PropertyAgeBoldSmV1SVG;
