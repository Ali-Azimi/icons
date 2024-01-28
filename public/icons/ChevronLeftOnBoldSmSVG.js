import React from 'react';

const ChevronLeftOnBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9.48014 6.07618C9.79834 5.81101 9.84134 5.33809 9.57616 5.01988C9.31099 4.70167 8.83807 4.65868 8.51986 4.92385L5.51986 7.42385C5.34887 7.56635 5.25 7.77744 5.25 8.00002C5.25 8.2226 5.34887 8.43369 5.51986 8.57619L8.51986 11.0762C8.83807 11.3414 9.31099 11.2984 9.57617 10.9802C9.84134 10.6619 9.79835 10.189 9.48014 9.92385L7.17154 8.00002L9.48014 6.07618Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronLeftOnBoldSmSVG;
