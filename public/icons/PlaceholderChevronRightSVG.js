import React from 'react';

const PlaceholderChevronRightSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <g clipPath='url(#clip0_86_94)'>
                <path d='M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z' fill='#008FFF' />
            </g>
            <defs>
                <clipPath id='clip0_86_94'>
                    <rect width={24} height={24} fill='white' />
                </clipPath>
            </defs>
        </svg>
    );
};

export default PlaceholderChevronRightSVG;
