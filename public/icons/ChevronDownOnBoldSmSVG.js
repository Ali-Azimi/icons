import React from 'react';

const ChevronDownOnBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8.57618 10.4801C8.43369 10.6511 8.2226 10.75 8.00002 10.75C7.77743 10.75 7.56635 10.6511 7.42385 10.4801L4.92385 7.48014C4.65868 7.16193 4.70167 6.68901 5.01988 6.42383C5.33809 6.15866 5.81101 6.20165 6.07618 6.51986L8.00002 8.82846L9.92385 6.51986C10.189 6.20166 10.662 6.15866 10.9802 6.42384C11.2984 6.68901 11.3414 7.16193 11.0762 7.48014L8.57618 10.4801Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronDownOnBoldSmSVG;
