import React from 'react';

const CameraBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.23606 2C8.09974 2 7.06096 2.64201 6.55278 3.65836L5.38196 6H5C2.79086 6 1 7.79086 1 10V16C1 19.3137 3.68629 22 7 22H17C20.3137 22 23 19.3137 23 16V10C23 7.79086 21.2091 6 19 6H18.618L17.4472 3.65836C16.939 2.64201 15.9002 2 14.7639 2H9.23606ZM15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14ZM19 11C19.5523 11 20 10.5523 20 10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10C18 10.5523 18.4477 11 19 11Z'
                fill={color}
            />
        </svg>
    );
};

export default CameraBoldMdSVG;
