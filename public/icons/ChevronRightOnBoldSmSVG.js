import React from 'react';

const ChevronRightOnBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.48016 4.92385C7.16195 4.65868 6.68903 4.70167 6.42385 5.01988C6.15868 5.33809 6.20167 5.81101 6.51988 6.07618L8.82848 8.00002L6.51988 9.92385C6.20167 10.189 6.15868 10.6619 6.42385 10.9802C6.68903 11.2984 7.16195 11.3414 7.48016 11.0762L10.4802 8.57619C10.6511 8.43369 10.75 8.2226 10.75 8.00002C10.75 7.77744 10.6511 7.56635 10.4802 7.42385L7.48016 4.92385Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronRightOnBoldSmSVG;
