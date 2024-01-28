import React from 'react';

const TickCircleBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM17.2372 10.6757C17.6103 10.2686 17.5828 9.63604 17.1757 9.26284C16.7686 8.88965 16.136 8.91715 15.7628 9.32427L10.9686 14.5544L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L9.55437 15.9686C10.3595 16.7737 11.6735 16.7452 12.4429 15.9058L17.2372 10.6757Z'
                fill={color}
            />
        </svg>
    );
};

export default TickCircleBoldMdSVG;
