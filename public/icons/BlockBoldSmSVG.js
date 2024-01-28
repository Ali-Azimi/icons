import React from 'react';

const BlockBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 1.25C4.27208 1.25 1.25 4.27208 1.25 8C1.25 11.7279 4.27208 14.75 8 14.75C11.7279 14.75 14.75 11.7279 14.75 8C14.75 4.27208 11.7279 1.25 8 1.25ZM2.75 8C2.75 5.10051 5.1005 2.75 8 2.75C9.50935 2.75 10.8699 3.38693 11.8276 4.40668L3.31151 10.3648C2.95234 9.65415 2.75 8.85071 2.75 8ZM4.17232 11.5933L12.6885 5.63509C13.0477 6.3458 13.25 7.14927 13.25 8C13.25 10.8995 10.8995 13.25 8 13.25C6.49063 13.25 5.13002 12.613 4.17232 11.5933Z'
                fill={color}
            />
        </svg>
    );
};

export default BlockBoldSmSVG;
