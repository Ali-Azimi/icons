import React from 'react';

const ChevronLeftOffOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.38411 5.17992C9.56089 5.39206 9.53223 5.70734 9.32009 5.88412L6.78102 8.00001L9.32009 10.1159C9.53223 10.2927 9.56089 10.608 9.38411 10.8201C9.20733 11.0322 8.89205 11.0609 8.67991 10.8841L5.67991 8.38412C5.56591 8.28913 5.5 8.1484 5.5 8.00001C5.5 7.85162 5.56591 7.7109 5.67991 7.6159L8.67991 5.1159C8.89204 4.93912 9.20733 4.96778 9.38411 5.17992Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronLeftOffOutlineSmSVG;
