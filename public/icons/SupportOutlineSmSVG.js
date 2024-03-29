import React from 'react';

const SupportOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 3.5C4.96243 3.5 2.5 5.96243 2.5 9L3.75 9C4.99264 9 6 10.0074 6 11.25C6 12.4926 4.99264 13.5 3.75 13.5H2.20588C1.81603 13.5 1.5 13.184 1.5 12.7941V9C1.5 5.41015 4.41015 2.5 8 2.5C11.5899 2.5 14.5 5.41015 14.5 9V12.7941C14.5 13.184 14.184 13.5 13.7941 13.5H12.25C11.0074 13.5 10 12.4926 10 11.25C10 10.0074 11.0074 9 12.25 9L13.5 9C13.5 5.96243 11.0376 3.5 8 3.5ZM13.5 12C13.5 11.9997 13.5 12.0003 13.5 12L13.5 10H12.25C11.5596 10 11 10.5596 11 11.25C11 11.9403 11.5596 12.5 12.25 12.5H13.5L13.5 12ZM3.75 10H2.5V12.5H3.75C4.44036 12.5 5 11.9403 5 11.25C5 10.5596 4.44036 10 3.75 10Z'
                fill={color}
            />
        </svg>
    );
};

export default SupportOutlineSmSVG;
