import React from 'react';

const WaitingTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.3928 6.18465L5.70457 3H18.2954L17.6074 6.18369L17.6072 6.18476C17.1614 8.28641 15.85 10.1314 13.9682 11.3313L12.9259 12L13.9683 12.6688C15.8501 13.8687 17.1614 15.7136 17.6072 17.8152L17.6074 17.8163L18.2954 21H5.70457L6.3928 17.8153C6.8386 15.7137 8.15051 13.8683 10.0323 12.6684L11.0741 12L10.0323 11.3316C8.15045 10.1317 6.83861 8.28635 6.3928 6.18465Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H5C4.44772 3 4 2.55228 4 2Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 22C4 21.4477 4.44772 21 5 21H19C19.5523 21 20 21.4477 20 22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default WaitingTwoToneMdSVG;
