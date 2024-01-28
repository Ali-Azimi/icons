import React from 'react';

const LinkedinBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V13C1.5 13.8284 2.17157 14.5 3 14.5H13C13.8284 14.5 14.5 13.8284 14.5 13V3C14.5 2.17157 13.8284 1.5 13 1.5H3ZM5.27659 6.01582C5.77867 6.01582 6.0834 5.67605 6.0834 5.25693C6.0737 4.82796 5.78125 4.5 5.2973 4.5C4.81334 4.5 4.49825 4.82796 4.50019 5.25693C4.50019 5.67605 4.80364 6.01582 5.27659 6.01582ZM4.53772 6.61467V11.496H6.03423V6.61467H4.53772ZM6.89077 6.61602C6.91018 7.0581 6.93024 7.56447 6.93024 8.17316V11.496H8.42675V8.68083C8.42097 8.55251 8.43761 8.42416 8.47592 8.30171C8.58462 8.02229 8.83048 7.73238 9.24391 7.73238C9.78545 7.73238 10.0022 8.16201 10.0022 8.79037V11.5H11.5V8.61393C11.5 7.17682 10.7618 6.50779 9.77704 6.50779C8.96829 6.50779 8.48304 6.97546 8.28894 7.29489H8.25918L8.19059 6.61602H6.89077Z'
                fill={color}
            />
        </svg>
    );
};

export default LinkedinBoldSmSVG;