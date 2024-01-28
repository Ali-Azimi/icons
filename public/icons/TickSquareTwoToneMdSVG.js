import React from 'react';

const TickSquareTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 6.5C1 3.46243 3.46243 1 6.5 1H17.5C20.5376 1 23 3.46243 23 6.5V17.5C23 20.5376 20.5376 23 17.5 23H6.5C3.46243 23 1 20.5376 1 17.5V6.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.6933 7.88913C18.1411 8.29964 18.1714 8.99547 17.7609 9.4433L10.9346 16.8902L6.82218 12.7778C6.39261 12.3482 6.39261 11.6518 6.82218 11.2222C7.25176 10.7926 7.94824 10.7926 8.37782 11.2222L10.8654 13.7098L16.1391 7.9567C16.5496 7.50887 17.2455 7.47862 17.6933 7.88913Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default TickSquareTwoToneMdSVG;
