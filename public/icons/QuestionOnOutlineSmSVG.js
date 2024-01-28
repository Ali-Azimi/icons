import React from 'react';

const QuestionOnOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 5.5C7.4331 5.5 7 5.94176 7 6.45455C7 6.90466 7.3318 7.2985 7.79778 7.38965C8.13578 7.45576 8.5 7.74859 8.5 8.20909V9C8.5 9.27614 8.27614 9.5 8 9.5C7.72386 9.5 7.5 9.27614 7.5 9V8.34738C6.64664 8.1323 6 7.37536 6 6.45455C6 5.36069 6.91004 4.5 8 4.5C9.08996 4.5 10 5.36069 10 6.45455C10 6.73069 9.77614 6.95455 9.5 6.95455C9.22386 6.95455 9 6.73069 9 6.45455C9 5.94176 8.5669 5.5 8 5.5Z'
                fill={color}
            />
            <path
                d='M8 12C8.41421 12 8.75 11.6642 8.75 11.25C8.75 10.8358 8.41421 10.5 8 10.5C7.58579 10.5 7.25 10.8358 7.25 11.25C7.25 11.6642 7.58579 12 8 12Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
                fill={color}
            />
        </svg>
    );
};

export default QuestionOnOutlineSmSVG;