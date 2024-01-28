import React from 'react';

const PlaceholderCrossSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M18.6002 7.05025L13.6505 12L18.6002 16.9497L16.9503 18.5997L12.0006 13.6499L7.05084 18.5997L5.40092 16.9497L10.3507 12L5.40092 7.05025L7.05083 5.40034L12.0006 10.3501L16.9503 5.40034L18.6002 7.05025Z'
                fill='#008FFF'
            />
        </svg>
    );
};

export default PlaceholderCrossSVG;
