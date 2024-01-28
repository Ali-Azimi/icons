import React from 'react';

const TickSquareBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.5 1C3.46243 1 1 3.46243 1 6.5V17.5C1 20.5376 3.46243 23 6.5 23H17.5C20.5376 23 23 20.5376 23 17.5V6.5C23 3.46243 20.5376 1 17.5 1H6.5ZM17.7609 9.4433C18.1714 8.99547 18.1411 8.29964 17.6933 7.88913C17.2455 7.47862 16.5496 7.50887 16.1391 7.9567L10.8654 13.7098L8.37782 11.2222C7.94824 10.7926 7.25176 10.7926 6.82218 11.2222C6.39261 11.6518 6.39261 12.3482 6.82218 12.7778L10.9346 16.8902L17.7609 9.4433Z'
                fill={color}
            />
        </svg>
    );
};

export default TickSquareBoldMdSVG;
