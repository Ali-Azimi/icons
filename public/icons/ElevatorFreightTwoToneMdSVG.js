import React from 'react';

const ElevatorFreightTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 4.12602V1H11V6H12C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8H8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 6.13616 14.7252 4.57006 13 4.12602Z'
                fill='#040A1F'
            />
            <path
                d='M18.4599 15L12.771 8.36295C12.751 8.33878 12.7297 8.31538 12.7071 8.29283C12.625 8.21052 12.5314 8.14528 12.4312 8.09746C12.1576 7.96657 11.84 7.9687 11.5704 8.09674C11.4695 8.14465 11.3753 8.21021 11.2927 8.29302C11.2702 8.3155 11.249 8.33883 11.229 8.36292L10.4532 9.26799C10.7146 9.58645 11.0724 9.82275 11.482 9.93227L15.8258 15H8.17425L10.8815 11.8415C10.2126 11.6471 9.61603 11.2827 9.14165 10.7982L5.5401 15H5C3.89543 15 3 15.8954 3 17V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V17C21 15.8954 20.1046 15 19 15H18.4599Z'
                fill={color}
            />
        </svg>
    );
};

export default ElevatorFreightTwoToneMdSVG;
