import React from 'react';

const LinkOutTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11 5C7.68629 5 5 7.68629 5 11V17C5 20.3137 7.68629 23 11 23H17C20.3137 23 23 20.3137 23 17V11C23 7.68629 20.3137 5 17 5H11Z'
                fill={color}
            />
            <path
                d='M3 1C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4.41434L11.0128 12.4272C11.4033 12.8177 12.0365 12.8177 12.427 12.4272C12.8176 12.0366 12.8176 11.4035 12.427 11.0129L4.41409 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H3Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default LinkOutTwoToneMdSVG;
