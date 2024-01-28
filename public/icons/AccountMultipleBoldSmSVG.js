import React from 'react';

const AccountMultipleBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11 1.5C9.89543 1.5 9 2.39543 9 3.5C9 4.60457 9.89543 5.5 11 5.5C12.1046 5.5 13 4.60457 13 3.5C13 2.39543 12.1046 1.5 11 1.5Z'
                fill={color}
            />
            <path
                d='M8.50286 7.89133C8.39998 7.82416 8.37494 7.68173 8.45948 7.59256C9.09732 6.91967 9.99965 6.5 11 6.5C12.933 6.5 14.5 8.067 14.5 10C14.5 10.8284 13.8284 11.5 13 11.5H11.0759C10.9794 11.5 10.897 11.4309 10.8767 11.3366C10.5671 9.89877 9.69534 8.6699 8.50286 7.89133Z'
                fill={color}
            />
            <path
                d='M5.5 2.5C4.11929 2.5 3 3.61929 3 5C3 6.38071 4.11929 7.5 5.5 7.5C6.88071 7.5 8 6.38071 8 5C8 3.61929 6.88071 2.5 5.5 2.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.5 12.5C1.5 10.2909 3.29086 8.5 5.5 8.5C7.70914 8.5 9.5 10.2909 9.5 12.5V13C9.5 13.8284 8.82843 14.5 8 14.5H3C2.17157 14.5 1.5 13.8284 1.5 13V12.5Z'
                fill={color}
            />
        </svg>
    );
};

export default AccountMultipleBoldSmSVG;
