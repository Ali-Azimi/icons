import React from 'react';

const CameraTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 6C2.79086 6 1 7.79086 1 10V16C1 19.3137 3.68629 22 7 22H17C20.3137 22 23 19.3137 23 16V10C23 7.79086 21.2091 6 19 6H5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12ZM8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14Z'
                fill='#040A1F'
            />
            <path
                d='M20 10C20 10.5523 19.5523 11 19 11C18.4477 11 18 10.5523 18 10C18 9.44772 18.4477 9 19 9C19.5523 9 20 9.44772 20 10Z'
                fill='#040A1F'
            />
            <path
                d='M9.23606 2C8.09974 2 7.06096 2.64201 6.55278 3.65836L5.38196 6H7.61803L8.34163 4.55279C8.51102 4.214 8.85729 4 9.23606 4H14.7639C15.1427 4 15.489 4.214 15.6584 4.55279L16.382 6H18.618L17.4472 3.65836C16.939 2.64201 15.9002 2 14.7639 2H9.23606Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default CameraTwoToneMdSVG;