import React from 'react';

const DropdownOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.5 12C4.5 10.067 6.067 8.5 8 8.5H24C25.933 8.5 27.5 10.067 27.5 12V12.5581C27.5 13.9252 26.8786 15.2181 25.8111 16.072L17.5617 22.6715C16.6487 23.402 15.3513 23.402 14.4383 22.6715L6.18887 16.072C5.1214 15.2181 4.5 13.9252 4.5 12.5581V12ZM8 11.5C7.72386 11.5 7.5 11.7239 7.5 12V12.5581C7.5 13.0138 7.70713 13.4448 8.06296 13.7294L16 20.0791L23.937 13.7294C24.2929 13.4448 24.5 13.0138 24.5 12.5581V12C24.5 11.7239 24.2761 11.5 24 11.5H8Z'
                fill={color}
            />
        </svg>
    );
};

export default DropdownOutlineLargeSVG;
