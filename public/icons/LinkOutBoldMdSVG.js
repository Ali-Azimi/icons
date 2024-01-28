import React from 'react';

const LinkOutBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8C8.55228 1 9 1.44772 9 2C9 2.55228 8.55228 3 8 3H4.41409L11.7065 10.2924C12.0982 10.105 12.5368 10 13 10H20C21.6569 10 23 11.3431 23 13V20C23 21.6569 21.6569 23 20 23H13C11.3431 23 10 21.6569 10 20V13C10 12.5369 10.1049 12.0983 10.2923 11.7067L3 4.41434V8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8V3C1 2.46957 1.21071 1.96086 1.58579 1.58579Z'
                fill={color}
            />
        </svg>
    );
};

export default LinkOutBoldMdSVG;
