import React from 'react';

const ChevronUpOnBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM16.7071 12.2929L12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L12 10.4142L15.2929 13.7071C15.6834 14.0976 16.3166 14.0976 16.7071 13.7071C17.0976 13.3166 17.0976 12.6834 16.7071 12.2929Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronUpOnBoldMdSVG;
