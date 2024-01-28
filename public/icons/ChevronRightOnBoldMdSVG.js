import React from 'react';

const ChevronRightOnBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM11.7071 7.29289C11.3166 6.90237 10.6834 6.90237 10.2929 7.29289C9.90237 7.68342 9.90237 8.31658 10.2929 8.70711L13.5858 12L10.2929 15.2929C9.90237 15.6834 9.90237 16.3166 10.2929 16.7071C10.6834 17.0976 11.3166 17.0976 11.7071 16.7071L15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929L11.7071 7.29289Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronRightOnBoldMdSVG;
