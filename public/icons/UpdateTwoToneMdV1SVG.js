import React from 'react';

const UpdateTwoToneMdV1SVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 7C1 3.68629 3.68629 1 7 1H18C20.7614 1 23 3.23858 23 6H21C21 4.34315 19.6569 3 18 3H7C4.79086 3 3 4.79086 3 7V9.58579L5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289C7.09763 7.68342 7.09763 8.31658 6.70711 8.70711L2.70711 12.7071C2.42111 12.9931 1.99099 13.0787 1.61732 12.9239C1.24364 12.7691 1 12.4045 1 12V7Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23 17C23 20.3137 20.3137 23 17 23L6 23C3.23858 23 1 20.7614 1 18H3C3 19.6569 4.34315 21 6 21L17 21C19.2091 21 21 19.2091 21 17V14.4142L18.7071 16.7071C18.3166 17.0976 17.6834 17.0976 17.2929 16.7071C16.9024 16.3166 16.9024 15.6834 17.2929 15.2929L21.2929 11.2929C21.5789 11.0069 22.009 10.9213 22.3827 11.0761C22.7564 11.2309 23 11.5955 23 12V17Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default UpdateTwoToneMdV1SVG;