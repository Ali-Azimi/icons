import React from 'react';

const ChevronLeftOnOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.38411 5.17991C9.56089 5.39205 9.53223 5.70733 9.32009 5.88411L6.78102 8L9.32009 10.1159C9.53223 10.2927 9.56089 10.608 9.38411 10.8201C9.20733 11.0322 8.89205 11.0609 8.67991 10.8841L5.67991 8.38411C5.56591 8.28911 5.5 8.14839 5.5 8C5.5 7.85161 5.56591 7.71089 5.67991 7.61589L8.67991 5.11589C8.89204 4.93911 9.20733 4.96777 9.38411 5.17991Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronLeftOnOutlineSmSVG;
