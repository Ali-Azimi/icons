import React from 'react';

const ChevronUpOffOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.00001 5.5C8.1484 5.5 8.28913 5.56591 8.38412 5.67991L10.8841 8.67991C11.0609 8.89204 11.0322 9.20733 10.8201 9.38411C10.608 9.56089 10.2927 9.53223 10.1159 9.32009L8.00001 6.78102L5.88412 9.32009C5.70734 9.53223 5.39206 9.56089 5.17992 9.38411C4.96778 9.20733 4.93912 8.89205 5.1159 8.67991L7.6159 5.67991C7.7109 5.56591 7.85162 5.5 8.00001 5.5Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronUpOffOutlineSmSVG;
