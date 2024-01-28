import React from 'react';

const RecieverAddressBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 4C1 2.34315 2.34315 1 4 1H7C7.55228 1 8 1.44772 8 2V7.06574C8 7.46509 8.44507 7.70328 8.77735 7.48177L10.7226 6.1849C10.8906 6.07293 11.1094 6.07293 11.2773 6.1849L13.2227 7.48177C13.5549 7.70328 14 7.46509 14 7.06574V2C14 1.44772 14.4477 1 15 1H18C19.6569 1 21 2.34315 21 4V10.6683C21 11.0534 20.5756 11.302 20.2085 11.1858C19.8272 11.0651 19.4212 11 19 11C16.7909 11 15 12.7909 15 15C15 15.5467 15.1097 16.0678 15.3082 16.5425C15.4372 16.8508 15.2926 17.228 14.9936 17.3774C13.8117 17.9677 13 19.1891 13 20.6C13 21.1568 13.1034 21.6895 13.2921 22.1798C13.4347 22.5504 13.1857 23 12.7887 23H4C2.34315 23 1 21.6569 1 20V4ZM9 17H4V15H9V17ZM4 20H7V18H4V20Z'
                fill={color}
            />
            <path
                d='M19 17C20.1046 17 21 16.1046 21 15C21 13.8954 20.1046 13 19 13C17.8954 13 17 13.8954 17 15C17 16.1046 17.8954 17 19 17Z'
                fill={color}
            />
            <path
                d='M16.6 19C15.7163 19 15 19.7163 15 20.6C15 21.9255 16.0745 23 17.4 23H20.6C21.9255 23 23 21.9255 23 20.6C23 19.7163 22.2837 19 21.4 19H16.6Z'
                fill={color}
            />
        </svg>
    );
};

export default RecieverAddressBoldMdSVG;