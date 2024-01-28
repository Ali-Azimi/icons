import React from 'react';

const NotificationTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V3.06189C11.3276 3.02104 11.6613 3 12 3C12.3387 3 12.6724 3.02104 13 3.06189V2Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19H16C16 21.2091 14.2091 23 12 23C9.79086 23 8 21.2091 8 19H10Z'
                fill='#040A1F'
            />
            <path
                d='M12 3C7.58172 3 4 6.58172 4 11V14.3611C4 14.3739 3.99278 14.3856 3.98136 14.3913L3.23607 14.7639C2.47852 15.1427 2 15.917 2 16.7639C2 17.9989 3.00112 19 4.23607 19H19.7639C20.9989 19 22 17.9989 22 16.7639C22 15.917 21.5215 15.1427 20.7639 14.7639L20.0186 14.3913C20.0072 14.3856 20 14.3739 20 14.3611V11C20 6.58172 16.4183 3 12 3Z'
                fill={color}
            />
        </svg>
    );
};

export default NotificationTwoToneMdSVG;
