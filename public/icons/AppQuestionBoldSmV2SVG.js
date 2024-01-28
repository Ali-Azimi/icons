import React from 'react';

const AppQuestionBoldSmV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5H14.5V8ZM8 5.75C7.58579 5.75 7.25 6.08579 7.25 6.5C7.25 6.86231 7.50766 7.16612 7.85015 7.23518C8.27123 7.32008 8.75 7.69161 8.75 8.3V9C8.75 9.41421 8.41421 9.75 8 9.75C7.58579 9.75 7.25 9.41421 7.25 9V8.62174C6.37616 8.31276 5.75 7.48018 5.75 6.5C5.75 5.25736 6.75736 4.25 8 4.25C9.24264 4.25 10.25 5.25736 10.25 6.5C10.25 6.91421 9.91421 7.25 9.5 7.25C9.08579 7.25 8.75 6.91421 8.75 6.5C8.75 6.08579 8.41421 5.75 8 5.75ZM8.75 11.25C8.75 11.6642 8.41421 12 8 12C7.58579 12 7.25 11.6642 7.25 11.25C7.25 10.8358 7.58579 10.5 8 10.5C8.41421 10.5 8.75 10.8358 8.75 11.25Z'
                fill={color}
            />
        </svg>
    );
};

export default AppQuestionBoldSmV2SVG;