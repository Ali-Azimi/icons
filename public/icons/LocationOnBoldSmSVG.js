import React from 'react';

const LocationOnBoldSmSVG = ({ color = '#333333', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.43485 2.3994C5.63158 1.53201 7.04564 1.25 8 1.25C8.95436 1.25 10.3684 1.53201 11.5651 2.3994C12.7998 3.29432 13.75 4.77766 13.75 7.03334C13.75 8.67757 12.9165 10.3177 11.9322 11.6212C10.9425 12.932 9.70589 14.0272 8.71969 14.5658C8.26995 14.8114 7.73005 14.8114 7.28031 14.5658C6.29411 14.0272 5.05754 12.932 4.06778 11.6212C3.08349 10.3177 2.25 8.67757 2.25 7.03334C2.25 4.77766 3.20015 3.29432 4.43485 2.3994ZM10 7C10 8.10457 9.10457 9 8 9C6.89543 9 6 8.10457 6 7C6 5.89543 6.89543 5 8 5C9.10457 5 10 5.89543 10 7Z'
                fill={color}
            />
        </svg>
    );
};

export default LocationOnBoldSmSVG;
