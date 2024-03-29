import React from 'react';

const ChevronLeftOffMdSVG = ({ width = '24', height = '24', color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711L10.4142 12L13.7071 15.2929C14.0976 15.6834 14.0976 16.3166 13.7071 16.7071C13.3166 17.0976 12.6834 17.0976 12.2929 16.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronLeftOffMdSVG;
