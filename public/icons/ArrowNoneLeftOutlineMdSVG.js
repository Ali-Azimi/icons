import React from 'react';

const ArrowNoneLeftOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289C11.0976 5.68342 11.0976 6.31658 10.7071 6.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L10.7071 17.2929C11.0976 17.6834 11.0976 18.3166 10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L9.29289 5.29289Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowNoneLeftOutlineMdSVG;
