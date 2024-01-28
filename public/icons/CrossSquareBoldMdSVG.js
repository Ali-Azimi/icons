import React from 'react';

const CrossSquareBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.5 1C3.46243 1 1 3.46243 1 6.5V17.5C1 20.5376 3.46243 23 6.5 23H17.5C20.5376 23 23 20.5376 23 17.5V6.5C23 3.46243 20.5376 1 17.5 1H6.5ZM16.0778 7.92218C15.6482 7.49261 14.9518 7.49261 14.5222 7.92218L12 10.4444L9.47782 7.92228C9.04825 7.4927 8.35177 7.4927 7.92219 7.92228C7.49261 8.35186 7.49261 9.04834 7.92219 9.47791L10.4443 12L7.92218 14.5222C7.49261 14.9518 7.49261 15.6482 7.92218 16.0778C8.35176 16.5074 9.04824 16.5074 9.47782 16.0778L12 13.5557L14.5222 16.0779C14.9518 16.5075 15.6482 16.5075 16.0778 16.0779C16.5074 15.6483 16.5074 14.9519 16.0778 14.5223L13.5556 12L16.0778 9.47782C16.5074 9.04824 16.5074 8.35176 16.0778 7.92218Z'
                fill={color}
            />
        </svg>
    );
};

export default CrossSquareBoldMdSVG;