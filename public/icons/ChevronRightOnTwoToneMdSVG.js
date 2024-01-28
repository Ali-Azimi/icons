import React from 'react';

const ChevronRightOnTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.2929 7.29289C10.6834 6.90237 11.3166 6.90237 11.7071 7.29289L15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L13.5858 12L10.2929 8.70711C9.90237 8.31658 9.90237 7.68342 10.2929 7.29289Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ChevronRightOnTwoToneMdSVG;
