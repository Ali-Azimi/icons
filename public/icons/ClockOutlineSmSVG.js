import React from 'react';

const ClockOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.5 4.40002C8.5 4.12388 8.27614 3.90002 8 3.90002C7.72386 3.90002 7.5 4.12388 7.5 4.40002V8.25002L10.1 10.2C10.3209 10.3657 10.6343 10.3209 10.8 10.1C10.9657 9.87911 10.9209 9.56571 10.7 9.40002L8.5 7.75002V4.40002Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8Z'
                fill={color}
            />
        </svg>
    );
};

export default ClockOutlineSmSVG;
