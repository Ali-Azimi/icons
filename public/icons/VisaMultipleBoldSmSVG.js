import React from 'react';

const VisaMultipleBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.5 3C10.5 2.17157 9.82843 1.5 9 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V10C1.5 10.8284 2.17157 11.5 3 11.5H9C9.82843 11.5 10.5 10.8284 10.5 10V3ZM6 5C6.82843 5 7.5 5.67157 7.5 6.5C7.5 7.32843 6.82843 8 6 8C5.17157 8 4.5 7.32843 4.5 6.5C4.5 5.67157 5.17157 5 6 5Z'
                fill={color}
            />
            <path
                d='M13 4.5H12.2C12.0895 4.5 12 4.58954 12 4.7V10C12 11.6569 10.6569 13 9 13H5.7C5.58954 13 5.4986 13.09 5.51315 13.1995C5.61072 13.9336 6.23922 14.5 7 14.5H13C13.8284 14.5 14.5 13.8284 14.5 13V6C14.5 5.17157 13.8284 4.5 13 4.5Z'
                fill={color}
            />
        </svg>
    );
};

export default VisaMultipleBoldSmSVG;
