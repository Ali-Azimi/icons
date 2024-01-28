import React from 'react';

const ReturnCircleRightTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z'
                fill={color}
            />
            <path
                d='M15.7071 12.7071C15.3166 13.0976 14.6834 13.0976 14.2929 12.7071C13.9024 12.3166 13.9024 11.6834 14.2929 11.2929L14.5858 11H9.5C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14H10.0769C10.6292 14 11.0769 14.4477 11.0769 15C11.0769 15.5523 10.6292 16 10.0769 16H9.5C7.567 16 6 14.433 6 12.5C6 10.567 7.567 9 9.5 9H14.5858L14.2929 8.70711C13.9024 8.31658 13.9024 7.68342 14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L15.7071 12.7071Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ReturnCircleRightTwoToneMdSVG;
