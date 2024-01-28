import React from 'react';

const ChevronRightOnOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.32011 5.1159C7.10797 4.93912 6.79269 4.96778 6.6159 5.17992C6.43912 5.39206 6.46778 5.70734 6.67992 5.88412L9.21899 8.00001L6.67992 10.1159C6.46778 10.2927 6.43912 10.608 6.6159 10.8201C6.79268 11.0322 7.10797 11.0609 7.3201 10.8841L10.3201 8.38412C10.4341 8.28913 10.5 8.1484 10.5 8.00001C10.5 7.85162 10.4341 7.7109 10.3201 7.6159L7.32011 5.1159Z'
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

export default ChevronRightOnOutlineSmSVG;
