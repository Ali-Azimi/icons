import React from 'react';

const ArrowCircleUpBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM8.29289 11.7071C7.90237 11.3166 7.90237 10.6834 8.29289 10.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071L13 10.4142L13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L9.70711 11.7071C9.31658 12.0976 8.68342 12.0976 8.29289 11.7071Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowCircleUpBoldMdSVG;
