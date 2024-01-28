import React from 'react';

const LinkOutBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 1.25H2C1.58579 1.25 1.25 1.58579 1.25 2V5C1.25 5.30335 1.43273 5.57682 1.71299 5.69291C1.99324 5.809 2.31583 5.74483 2.53033 5.53033L3.49988 4.56078L5.59839 6.65929C5.37649 7.05594 5.25 7.5132 5.25 8V12C5.25 13.5188 6.48122 14.75 8 14.75H12C13.5188 14.75 14.75 13.5188 14.75 12V8C14.75 6.48122 13.5188 5.25 12 5.25H8C7.51307 5.25 7.0557 5.37655 6.65898 5.59857L4.56054 3.50012L5.53033 2.53033C5.74483 2.31583 5.809 1.99324 5.69291 1.71299C5.57682 1.43273 5.30335 1.25 5 1.25Z'
                fill={color}
            />
        </svg>
    );
};

export default LinkOutBoldSmSVG;
