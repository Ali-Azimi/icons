import React from 'react';

const CrossSquareTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 6.5C1 3.46243 3.46243 1 6.5 1H17.5C20.5376 1 23 3.46243 23 6.5V17.5C23 20.5376 20.5376 23 17.5 23H6.5C3.46243 23 1 20.5376 1 17.5V6.5Z'
                fill={color}
            />
            <path
                d='M14.5222 7.92218C14.9518 7.49261 15.6482 7.49261 16.0778 7.92218C16.5074 8.35176 16.5074 9.04824 16.0778 9.47782L13.5556 12L16.0778 14.5222C16.5074 14.9518 16.5074 15.6482 16.0778 16.0778C15.6482 16.5074 14.9518 16.5074 14.5222 16.0778L12 13.5556L9.47782 16.0778C9.04824 16.5074 8.35176 16.5074 7.92218 16.0778C7.49261 15.6482 7.49261 14.9518 7.92218 14.5222L10.4444 12L7.92218 9.47782C7.49261 9.04824 7.49261 8.35176 7.92218 7.92218C8.35176 7.49261 9.04824 7.49261 9.47782 7.92218L12 10.4444L14.5222 7.92218Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default CrossSquareTwoToneMdSVG;
