import React from 'react';

const CompanyPropertyOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M10 11V9L6 9V11H10Z' fill={color} />
            <path d='M10 13V15H6V13H10Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14 2C14 1.65342 13.8205 1.33156 13.5257 1.14935C13.2309 0.967144 12.8628 0.95058 12.5528 1.10557L3.10557 5.82918C2.428 6.16796 2 6.86049 2 7.61804V22C2 22.5523 2.44772 23 3 23H19.8571C20.3856 23 20.9148 22.8175 21.3238 22.4597C21.737 22.0981 22 21.5768 22 21L22 12.41L22 12.4017C21.9968 12.017 21.8757 11.6502 21.6639 11.3402C21.4532 11.0317 21.1629 10.7938 20.837 10.6378L19 9.75969V7C19 6.44772 18.5523 6 18 6C17.4477 6 17 6.44772 17 7V8.80367L14 7.36964V2ZM14 9.58639V21H19.8571C19.9273 21 19.9766 20.977 20 20.9599V12.4573C19.994 12.4529 19.9856 12.4476 19.9741 12.4421L14 9.58639ZM12 3.61803L4 7.61803V21H12V3.61803Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyPropertyOutlineMdSVG;
