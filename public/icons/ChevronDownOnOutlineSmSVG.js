import React from 'react';

const ChevronDownOnOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.38412 10.3201C8.28913 10.4341 8.1484 10.5 8.00001 10.5C7.85162 10.5 7.7109 10.4341 7.6159 10.3201L5.1159 7.32009C4.93912 7.10795 4.96778 6.79267 5.17992 6.61589C5.39206 6.43911 5.70734 6.46777 5.88412 6.67991L8.00001 9.21898L10.1159 6.67991C10.2927 6.46777 10.608 6.43911 10.8201 6.61589C11.0322 6.79267 11.0609 7.10796 10.8841 7.32009L8.38412 10.3201Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronDownOnOutlineSmSVG;
