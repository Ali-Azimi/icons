import React from 'react';

const PreviousPolicyEndBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H20C21.6569 3 23 4.34315 23 6V8C23 8.55228 22.5523 9 22 9H5V11H22C22.5523 11 23 11.4477 23 12V17C23 20.3137 20.3137 23 17 23H7C3.68629 23 1 20.3137 1 17V6C1 4.34315 2.34315 3 4 3H6V2C6 1.44772 6.44772 1 7 1ZM18 17H15V20H18V17Z'
                fill={color}
            />
        </svg>
    );
};

export default PreviousPolicyEndBoldMdSVG;
