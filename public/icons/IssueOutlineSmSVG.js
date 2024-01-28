import React from 'react';

const IssueOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.15434 13.5L7.06407 3.14559C7.3891 2.2848 8.61091 2.28481 8.93593 3.14559L12.8457 13.5H14C14.2761 13.5 14.5 13.7239 14.5 14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14C1.5 13.7239 1.72386 13.5 2 13.5H3.15434ZM8.0004 3.49884L11.7768 13.5H4.22325L8.0004 3.49884Z'
                fill={color}
            />
        </svg>
    );
};

export default IssueOutlineSmSVG;
