import React from 'react';

const TickNoneOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M26.0607 8.93934C25.4749 8.35355 24.5251 8.35355 23.9393 8.93934L13 19.8787L8.06066 14.9393C7.47487 14.3536 6.52513 14.3536 5.93934 14.9393C5.35355 15.5251 5.35355 16.4749 5.93934 17.0607L11.9393 23.0607C12.5251 23.6464 13.4749 23.6464 14.0607 23.0607L26.0607 11.0607C26.6464 10.4749 26.6464 9.52513 26.0607 8.93934Z'
                fill={color}
            />
        </svg>
    );
};

export default TickNoneOutlineLargeSVG;
