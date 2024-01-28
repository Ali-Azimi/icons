import React from 'react';

const ChevronUpOnBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8.57618 5.51986C8.43369 5.34887 8.2226 5.25 8.00002 5.25C7.77743 5.25 7.56635 5.34887 7.42385 5.51986L4.92385 8.51986C4.65868 8.83807 4.70167 9.31099 5.01988 9.57617C5.33809 9.84134 5.81101 9.79835 6.07618 9.48014L8.00002 7.17154L9.92385 9.48014C10.189 9.79834 10.662 9.84134 10.9802 9.57616C11.2984 9.31099 11.3414 8.83807 11.0762 8.51986L8.57618 5.51986Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronUpOnBoldSmSVG;
