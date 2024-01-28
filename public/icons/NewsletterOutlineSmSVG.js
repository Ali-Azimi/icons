import React from 'react';

const NewsletterOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.6 1.5C3.99249 1.5 3.5 1.99249 3.5 2.6V6.5H2.5C1.94772 6.5 1.5 6.94771 1.5 7.5V12C1.5 13.3807 2.61929 14.5 4 14.5H12C13.3807 14.5 14.5 13.3807 14.5 12V7.5C14.5 6.94772 14.0523 6.5 13.5 6.5H12.5V2.6C12.5 1.99249 12.0075 1.5 11.4 1.5H4.6ZM4.5 2.6C4.5 2.54477 4.54477 2.5 4.6 2.5H11.4C11.4552 2.5 11.5 2.54477 11.5 2.6V6.75L8.3 9.15C8.12222 9.28333 7.87778 9.28333 7.7 9.15L4.5 6.75V2.6ZM12.1667 7.5H13.5V12C13.5 12.8284 12.8284 13.5 12 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V7.5H3.83333L7.1 9.95C7.63333 10.35 8.36667 10.35 8.9 9.95L12.1667 7.5Z'
                fill={color}
            />
        </svg>
    );
};

export default NewsletterOutlineSmSVG;
