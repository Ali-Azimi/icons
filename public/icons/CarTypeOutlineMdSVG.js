import React from 'react';

const CarTypeOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 3C9 1.89543 9.89543 1 11 1H21C22.1046 1 23 1.89543 23 3V12V15C23 16.1046 22.1046 17 21 17V18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18V17H17C16.4477 17 16 16.5523 16 16C16 15.4477 16.4477 15 17 15H20H21V13H16H15C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11V6H11V8C11 8.55228 10.5523 9 10 9C9.44771 9 9 8.55228 9 8V5V3ZM17 11V6H21V11H17ZM16 4H21V3H11V4H16ZM2.85696 12.1052C3.24835 10.8527 4.40825 10 5.7204 10H10.2796C11.5918 10 12.7517 10.8527 13.1431 12.1052L14.2613 15.6834C14.7264 16.3371 15 17.1366 15 18V19C15 20.1046 14.1046 21 13 21V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H5V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22L3 21C1.89543 21 1 20.1046 1 19V18C1 17.1365 1.27359 16.337 1.7388 15.6833L2.85696 12.1052ZM5 14H11H11.6398L11.2341 12.7017C11.1037 12.2843 10.717 12 10.2796 12H5.7204C5.28302 12 4.89639 12.2842 4.76592 12.7017L4.36021 14H5ZM5 16C3.89543 16 3 16.8954 3 18V19H4H12H13V18C13 16.8954 12.1046 16 11 16H5Z'
                fill={color}
            />
        </svg>
    );
};

export default CarTypeOutlineMdSVG;