import React from 'react';

const ReturnCircleLeftBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.999998 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 0.999998 5.92487 0.999998 12ZM9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289L8.29289 7.29289C8.68342 6.90237 9.31658 6.90237 9.70711 7.29289C10.0976 7.68342 10.0976 8.31658 9.70711 8.70711L9.41421 9H14.5C16.433 9 18 10.567 18 12.5C18 14.433 16.433 16 14.5 16H13.9231C13.3708 16 12.9231 15.5523 12.9231 15C12.9231 14.4477 13.3708 14 13.9231 14H14.5C15.3284 14 16 13.3284 16 12.5C16 11.6716 15.3284 11 14.5 11H9.41421L9.70711 11.2929C10.0976 11.6834 10.0976 12.3166 9.70711 12.7071Z'
                fill={color}
            />
        </svg>
    );
};

export default ReturnCircleLeftBoldMdSVG;