import React from 'react';

const ArrowCircleLeftBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 0.999999 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L10.2929 8.29289C10.6834 7.90237 11.3166 7.90237 11.7071 8.29289C12.0976 8.68342 12.0976 9.31658 11.7071 9.70711L10.4142 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H10.4142L11.7071 14.2929C12.0976 14.6834 12.0976 15.3166 11.7071 15.7071Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowCircleLeftBoldMdSVG;
