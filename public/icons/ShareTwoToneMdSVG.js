import React from 'react';

const ShareTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M17.2672 6.85449C17.7612 6.6075 17.9614 6.00682 17.7145 5.51284C17.4675 5.01887 16.8668 4.81864 16.3728 5.06563L6.73281 9.88563C6.23884 10.1326 6.03861 10.7333 6.2856 11.2273C6.53259 11.7212 7.13326 11.9215 7.62724 11.6745L17.2672 6.85449Z'
                fill='#040A1F'
            />
            <path
                d='M7.62724 12.3255C7.13326 12.0785 6.53259 12.2788 6.2856 12.7727C6.03861 13.2667 6.23884 13.8674 6.73281 14.1144L16.3728 18.9344C16.8668 19.1814 17.4675 18.9811 17.7145 18.4872C17.9614 17.9932 17.7612 17.3925 17.2672 17.1455L7.62724 12.3255Z'
                fill='#040A1F'
            />
            <path
                d='M19.26 1C17.1945 1 15.52 2.67446 15.52 4.74C15.52 6.80554 17.1945 8.48 19.26 8.48C21.3256 8.48 23 6.80554 23 4.74C23 2.67446 21.3256 1 19.26 1Z'
                fill={color}
            />
            <path
                d='M4.74 8.26001C2.67446 8.26001 1 9.93446 1 12C1 14.0656 2.67446 15.74 4.74 15.74C6.80554 15.74 8.48 14.0656 8.48 12C8.48 9.93446 6.80554 8.26001 4.74 8.26001Z'
                fill={color}
            />
            <path
                d='M19.26 15.52C17.1945 15.52 15.52 17.1945 15.52 19.26C15.52 21.3256 17.1945 23 19.26 23C21.3256 23 23 21.3256 23 19.26C23 17.1945 21.3256 15.52 19.26 15.52Z'
                fill={color}
            />
        </svg>
    );
};

export default ShareTwoToneMdSVG;
