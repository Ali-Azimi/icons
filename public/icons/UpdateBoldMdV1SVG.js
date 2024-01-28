import React from 'react';

const UpdateBoldMdV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7 1C3.68629 1 1 3.68629 1 7V12C1 12.4045 1.24364 12.7691 1.61732 12.9239C1.99099 13.0787 2.42111 12.9931 2.70711 12.7071L6.70711 8.70711C7.09763 8.31658 7.09763 7.68342 6.70711 7.29289C6.31658 6.90237 5.68342 6.90237 5.29289 7.29289L3 9.58579V7C3 4.79086 4.79086 3 7 3H18C19.6569 3 21 4.34315 21 6H23C23 3.23858 20.7614 1 18 1H7Z'
                fill={color}
            />
            <path
                d='M17 23C20.3137 23 23 20.3137 23 17L23 12C23 11.5955 22.7564 11.2309 22.3827 11.0761C22.009 10.9213 21.5789 11.0069 21.2929 11.2929L17.2929 15.2929C16.9024 15.6834 16.9024 16.3166 17.2929 16.7071C17.6834 17.0976 18.3166 17.0976 18.7071 16.7071L21 14.4142V17C21 19.2091 19.2091 21 17 21L6 21C4.34315 21 3 19.6569 3 18H1C1 20.7614 3.23858 23 6 23L17 23Z'
                fill={color}
            />
        </svg>
    );
};

export default UpdateBoldMdV1SVG;
