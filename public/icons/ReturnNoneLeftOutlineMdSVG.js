import React from 'react';

const ReturnNoneLeftOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.41421 11H15.5C16.8807 11 18 12.1193 18 13.5C18 14.8807 16.8807 16 15.5 16H14C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18H15.5C17.9853 18 20 15.9853 20 13.5C20 11.0147 17.9853 9 15.5 9H7.41421L8.70711 7.70711C9.09763 7.31658 9.09763 6.68342 8.7071 6.29289C8.31658 5.90237 7.68342 5.90237 7.29289 6.29289L4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L7.29289 13.7071Z'
                fill={color}
            />
        </svg>
    );
};

export default ReturnNoneLeftOutlineMdSVG;
