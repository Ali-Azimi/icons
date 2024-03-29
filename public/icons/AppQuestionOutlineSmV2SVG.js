import React from 'react';

const AppQuestionOutlineSmV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.75 11.25C8.75 11.6642 8.41421 12 8 12C7.58579 12 7.25 11.6642 7.25 11.25C7.25 10.8358 7.58579 10.5 8 10.5C8.41421 10.5 8.75 10.8358 8.75 11.25Z'
                fill={color}
            />
            <path
                d='M7 6.5C7 5.94772 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94772 9 6.5C9 6.77614 9.22386 7 9.5 7C9.77614 7 10 6.77614 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.43229 6.63743 8.21467 7.5 8.43687V9C7.5 9.27614 7.72386 9.5 8 9.5C8.27614 9.5 8.5 9.27614 8.5 9V8.3C8.5 7.83918 8.1356 7.54776 7.80074 7.48025C7.34387 7.38813 7 6.98366 7 6.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5H14.5V8ZM8 2.5C11.0376 2.5 13.5 4.96243 13.5 8V13.5H8C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5Z'
                fill={color}
            />
        </svg>
    );
};

export default AppQuestionOutlineSmV2SVG;
