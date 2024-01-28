import React from 'react';

const CameraBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.4 3.88197C10.9765 3.03501 10.1109 2.5 9.16393 2.5H6.83607C5.88914 2.5 5.02348 3.03501 4.6 3.88197L4.09098 4.9H4C2.61929 4.9 1.5 6.01929 1.5 7.4V10.5C1.5 12.7091 3.29086 14.5 5.5 14.5H10.5C12.7091 14.5 14.5 12.7091 14.5 10.5V7.4C14.5 6.01929 13.3807 4.9 12 4.9H11.909L11.4 3.88197ZM8 11C9.10457 11 10 10.1046 10 9C10 7.89543 9.10457 7 8 7C6.89543 7 6 7.89543 6 9C6 10.1046 6.89543 11 8 11Z'
                fill={color}
            />
        </svg>
    );
};

export default CameraBoldSmSVG;
