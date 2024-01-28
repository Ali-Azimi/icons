import React from 'react';

const BlockOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C9.68467 2.5 11.1924 3.25743 12.2013 4.45032L3.22468 10.7307C2.76359 9.92608 2.5 8.99382 2.5 8ZM3.7986 11.5496L12.7753 5.26921C13.2364 6.07383 13.5 7.00613 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C6.31529 13.5 4.80749 12.7425 3.7986 11.5496Z'
                fill={color}
            />
        </svg>
    );
};

export default BlockOutlineSmSVG;
