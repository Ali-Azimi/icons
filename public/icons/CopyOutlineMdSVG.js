import React from 'react';

const CopyOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 4C6 2.34315 7.34315 1 9 1H15C18.866 1 22 4.13401 22 8V16C22 17.6569 20.6569 19 19 19H9C7.34315 19 6 17.6569 6 16V7H5C4.44772 7 4 7.44772 4 8V20C4 20.5523 4.44772 21 5 21H14C14.5523 21 15 20.5523 15 20H17C17 21.6569 15.6569 23 14 23H5C3.34315 23 2 21.6569 2 20V8C2 6.34315 3.34315 5 5 5H6V4ZM9 3H14V5C14 7.20914 15.7909 9 18 9H20V16C20 16.5523 19.5523 17 19 17H9C8.44772 17 8 16.5523 8 16V4C8 3.44772 8.44772 3 9 3ZM16.0077 3.10158C17.9632 3.50173 19.5028 5.04343 19.9 7H18C16.8954 7 16 6.10457 16 5V3.10002L16.0077 3.10158Z'
                fill={color}
            />
        </svg>
    );
};

export default CopyOutlineMdSVG;
