import React from 'react';

const FloorNumbersBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.25 13.25V6.45C7.25 6.33954 7.16046 6.25 7.05 6.25H3C2.58579 6.25 2.25 6.58579 2.25 7V13.25H2C1.58579 13.25 1.25 13.5858 1.25 14C1.25 14.4142 1.58579 14.75 2 14.75H14C14.4142 14.75 14.75 14.4142 14.75 14C14.75 13.5858 14.4142 13.25 14 13.25H13.75V2C13.75 1.58579 13.4142 1.25 13 1.25H8.95C8.83954 1.25 8.75 1.33954 8.75 1.45V13.25H7.25Z'
                fill={color}
            />
        </svg>
    );
};

export default FloorNumbersBoldSmSVG;
