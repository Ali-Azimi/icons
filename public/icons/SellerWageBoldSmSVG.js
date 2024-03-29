import React from 'react';

const SellerWageBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M9.0059 1.00881C12.1013 1.45021 14.5498 3.89871 14.9912 6.9941C15.0699 7.54572 14.6106 8 14.0534 8H10.0178C8.9034 8 8 7.0966 8 5.9822V1.94661C8 1.38941 8.45428 0.930146 9.0059 1.00881Z'
                fill={color}
            />
            <path
                d='M1.5 8.50005C1.5 5.64979 3.48744 3.26372 6.1521 2.65205C6.33291 2.61055 6.5 2.75202 6.5 2.93753V5.97332C6.5 7.91615 8.07497 9.49112 10.0178 9.49112H13.0646C13.2499 9.49112 13.3913 9.65789 13.3501 9.83859C12.7419 12.508 10.3536 14.5 7.5 14.5C4.18629 14.5 1.5 11.8138 1.5 8.50005Z'
                fill={color}
            />
        </svg>
    );
};

export default SellerWageBoldSmSVG;
