import React from 'react';

const InfoEntryOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.5 3C7.5 2.72386 7.27614 2.5 7 2.5C6.72386 2.5 6.5 2.72386 6.5 3V13C6.5 13.2761 6.72386 13.5 7 13.5C7.27614 13.5 7.5 13.2761 7.5 13V11.5H13C13.8284 11.5 14.5 10.8284 14.5 10V6C14.5 5.17157 13.8284 4.5 13 4.5H7.5V3ZM7.5 5.5H13C13.2761 5.5 13.5 5.72386 13.5 6V10C13.5 10.2761 13.2761 10.5 13 10.5H7.5V5.5Z'
                fill={color}
            />
            <path
                d='M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H4.8C4.91046 5.5 5 5.41046 5 5.3V4.7C5 4.58954 4.91046 4.5 4.8 4.5H3C2.17157 4.5 1.5 5.17157 1.5 6V10C1.5 10.8284 2.17157 11.5 3 11.5H4.8C4.91046 11.5 5 11.4105 5 11.3V10.7C5 10.5895 4.91046 10.5 4.8 10.5H3C2.72386 10.5 2.5 10.2761 2.5 10V6Z'
                fill={color}
            />
        </svg>
    );
};

export default InfoEntryOutlineSmSVG;
