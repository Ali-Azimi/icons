import React from 'react';

const QuestionOnOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M16 28C14.8954 28 14 27.1046 14 26C14 24.8954 14.8954 24 16 24C17.1046 24 18 24.8954 18 26C18 27.1046 17.1046 28 16 28Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 6.5C14.067 6.5 12.5 8.067 12.5 10C12.5 11.4471 13.3785 12.6924 14.6372 13.2252C15.8703 13.7471 17.5 14.995 17.5 17V19.5C17.5 20.3284 16.8284 21 16 21C15.1716 21 14.5 20.3284 14.5 19.5V17C14.5 16.8945 14.4607 16.7438 14.2844 16.5446C14.1005 16.3368 13.8121 16.1336 13.4678 15.9879C11.1387 15.002 9.5 12.6941 9.5 10C9.5 6.41015 12.4101 3.5 16 3.5C19.5899 3.5 22.5 6.41015 22.5 10C22.5 10.8284 21.8284 11.5 21 11.5C20.1716 11.5 19.5 10.8284 19.5 10C19.5 8.067 17.933 6.5 16 6.5Z'
                fill={color}
            />
        </svg>
    );
};

export default QuestionOnOutlineLargeSVG;
