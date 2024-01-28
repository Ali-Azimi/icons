import React from 'react';

const NewsletterBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.6 1.25C3.85442 1.25 3.25 1.85442 3.25 2.6V6.25H2.5C1.80964 6.25 1.25 6.80964 1.25 7.5V12C1.25 13.5188 2.48122 14.75 4 14.75H12C13.5188 14.75 14.75 13.5188 14.75 12V7.5C14.75 6.80964 14.1904 6.25 13.5 6.25H12.75V2.6C12.75 1.85441 12.1456 1.25 11.4 1.25H4.6ZM4.75 6.625V2.75H11.25V6.625L8.15 8.95C8.06111 9.01667 7.93889 9.01667 7.85 8.95L4.75 6.625Z'
                fill={color}
            />
        </svg>
    );
};

export default NewsletterBoldSmSVG;
