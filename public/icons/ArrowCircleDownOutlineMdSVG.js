import React from 'react';

const ArrowCircleDownOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM12 1C18.0751 0.999999 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C0.999999 5.92487 5.92487 1 12 1Z'
                fill={color}
            />
            <path
                d='M15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929L13 13.5858V8C13 7.44771 12.5523 7 12 7C11.4477 7 11 7.44771 11 8V13.5858L9.70711 12.2929C9.31658 11.9024 8.68342 11.9024 8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L15.7071 13.7071Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowCircleDownOutlineMdSVG;
