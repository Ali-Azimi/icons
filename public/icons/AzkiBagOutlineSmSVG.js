import React from 'react';

const AzkiBagOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.5 2C2.5 1.72386 2.72386 1.5 3 1.5H10C11.3807 1.5 12.5 2.61929 12.5 4V6H13C13.8284 6 14.5 6.67157 14.5 7.5V8.5C14.5 9.32843 13.8284 10 13 10H12.5V12C12.5 13.3807 11.3807 14.5 10 14.5H3C2.72386 14.5 2.5 14.2761 2.5 14V2ZM3.5 13.5V2.5H10C10.8284 2.5 11.5 3.17157 11.5 4V6H10C9.17157 6 8.5 6.67157 8.5 7.5V8.5C8.5 9.32843 9.17157 10 10 10H11.5V12C11.5 12.8284 10.8284 13.5 10 13.5H3.5ZM10 9C9.72386 9 9.5 8.77614 9.5 8.5V7.5C9.5 7.22386 9.72386 7 10 7H13C13.2761 7 13.5 7.22386 13.5 7.5V8.5C13.5 8.77614 13.2761 9 13 9H10Z'
                fill={color}
            />
        </svg>
    );
};

export default AzkiBagOutlineSmSVG;
