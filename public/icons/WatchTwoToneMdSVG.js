import React from 'react';

const WatchTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 8C12.5523 8 13 8.44772 13 9V11.5L14.6 12.7C15.0418 13.0314 15.1314 13.6582 14.8 14.1C14.4686 14.5418 13.8418 14.6314 13.4 14.3L11 12.5V9C11 8.44772 11.4477 8 12 8Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z'
                fill='#040A1F'
            />
            <path
                d='M8.01358 1.8356C8.09395 1.35341 8.51114 1 8.99998 1H15C15.4888 1 15.906 1.35341 15.9864 1.8356L16.8371 6.94012C15.5803 5.73825 13.8763 5 12 5C10.1236 5 8.41969 5.73827 7.16282 6.94017L8.01358 1.8356Z'
                fill={color}
            />
            <path
                d='M7.16283 17.0598L8.01358 22.1643C8.09395 22.6465 8.51114 23 8.99997 23H15C15.4888 23 15.906 22.6465 15.9864 22.1643L16.8371 17.0599C15.5802 18.2618 13.8763 19 12 19C10.1236 19 8.4197 18.2617 7.16283 17.0598Z'
                fill={color}
            />
            <path
                d='M15.2622 15.7893C15.1927 15.8492 15.1216 15.9072 15.0488 15.9632C15.1195 15.9088 15.1886 15.8525 15.2562 15.7945C15.2582 15.7927 15.2602 15.791 15.2622 15.7893Z'
                fill={color}
            />
            <path
                d='M8.7798 15.8251C8.76775 15.8149 8.75574 15.8047 8.74379 15.7945L8.74176 15.7927C8.75438 15.8036 8.76707 15.8144 8.7798 15.8251Z'
                fill={color}
            />
        </svg>
    );
};

export default WatchTwoToneMdSVG;