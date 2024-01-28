import React from 'react';

const PassportNumberOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17H6Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19 8C19 9.0736 18.7583 10.0907 18.3264 11H21C22.1046 11 23 11.8954 23 13V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V13C1 11.8954 1.89543 11 3 11H5.67363C5.24169 10.0907 5 9.0736 5 8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8ZM12 15C13.9073 15 15.6364 14.2372 16.899 13H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13H7.10102C8.36355 14.2372 10.0927 15 12 15ZM17 8C17 5.23858 14.7614 3 12 3V5C12 6.65685 10.6569 8 9 8H7C7 10.7614 9.23858 13 12 13V11C12 9.34315 13.3431 8 15 8L17 8ZM14 12.584V11C14 10.4477 14.4477 10 15 10H16.584C16.08 11.1534 15.1534 12.08 14 12.584ZM7.41604 6C7.92 4.84656 8.84656 3.92 10 3.41604V5C10 5.55228 9.55228 6 9 6H7.41604Z'
                fill={color}
            />
        </svg>
    );
};

export default PassportNumberOutlineMdSVG;
