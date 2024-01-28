import React from 'react';

const ArrowNoneDownOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929C5.68342 12.9024 6.31658 12.9024 6.70711 13.2929L11 17.5858L11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4L13 17.5858L17.2929 13.2929C17.6834 12.9024 18.3166 12.9024 18.7071 13.2929C19.0976 13.6834 19.0976 14.3166 18.7071 14.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L5.29289 14.7071Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowNoneDownOutlineMdSVG;
