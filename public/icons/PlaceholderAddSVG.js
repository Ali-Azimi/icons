import React from 'react';

const PlaceholderAddSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M20.3333 13.3333H13.3333V20.3333H11V13.3333H4V11H11V4H13.3333V11H20.3333V13.3333Z' fill='#008FFF' />
        </svg>
    );
};

export default PlaceholderAddSVG;
