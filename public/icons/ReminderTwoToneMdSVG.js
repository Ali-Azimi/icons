import React from 'react';

const ReminderTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M21 3H3C1.89543 3 1 3.89543 1 5V18C1 20.7614 3.23857 23 6 23H13.3657C13.8996 23 14.4113 22.7865 14.787 22.4071L21.5533 15.5725C22.4801 14.6363 23 13.3721 23 12.0547V5C23 3.89543 22.1046 3 21 3Z'
                fill={color}
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M23 10H1V8H23V10Z' fill='#040A1F' />
            <path
                d='M22.6061 14H17C15.3431 14 14 15.3431 14 17V22.8967C14.2943 22.7983 14.5645 22.6318 14.787 22.4071L16 21.1818V17C16 16.4477 16.4477 16 17 16H21.13L21.5533 15.5725C22.0054 15.1157 22.3607 14.5809 22.6061 14Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C7.55228 1 8 1.44772 8 2V5C8 5.55229 7.55228 6 7 6C6.44772 6 6 5.55229 6 5V2C6 1.44772 6.44772 1 7 1Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 1C17.5523 1 18 1.44772 18 2V5C18 5.55229 17.5523 6 17 6C16.4477 6 16 5.55229 16 5V2C16 1.44772 16.4477 1 17 1Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ReminderTwoToneMdSVG;
