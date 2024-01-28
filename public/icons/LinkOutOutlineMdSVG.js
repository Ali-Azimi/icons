import React from 'react';

const LinkOutOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 1C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4.41421L11.0129 12.4272C11.4035 12.8177 12.0366 12.8177 12.4272 12.4272C12.8177 12.0366 12.8177 11.4035 12.4272 11.0129L4.41421 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H3ZM13 6C13 5.44772 13.4477 5 14 5H17C20.3137 5 23 7.68629 23 11V17C23 20.3137 20.3137 23 17 23H11C7.68629 23 5 20.3137 5 17V14C5 13.4477 5.44772 13 6 13C6.55228 13 7 13.4477 7 14V17C7 19.2091 8.79086 21 11 21H17C19.2091 21 21 19.2091 21 17V11C21 8.79086 19.2091 7 17 7H14C13.4477 7 13 6.55228 13 6Z'
                fill={color}
            />
        </svg>
    );
};

export default LinkOutOutlineMdSVG;
