import React from 'react';

const MailOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 3.5C2.17157 3.5 1.5 4.17157 1.5 5V9C1.5 10.933 3.067 12.5 5 12.5H11C12.933 12.5 14.5 10.933 14.5 9V5C14.5 4.17157 13.8284 3.5 13 3.5H3ZM2.55604 4.76977C2.63933 4.60949 2.80688 4.5 3 4.5H13C13.1931 4.5 13.3607 4.60949 13.444 4.76978L8.00001 8.39908L2.55604 4.76977ZM2.5 5.93426L7.72266 9.41603C7.89061 9.528 8.10941 9.528 8.27736 9.41603L13.5 5.93427V9C13.5 10.3807 12.3807 11.5 11 11.5H5C3.61929 11.5 2.5 10.3807 2.5 9V5.93426Z'
                fill={color}
            />
        </svg>
    );
};

export default MailOutlineSmSVG;
