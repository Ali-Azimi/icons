import React from 'react';

const PanelTruckTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 4C3.34315 4 2 5.34315 2 7V15C2 16.6569 3.34315 18 5 18H6.08535C6.29127 18.5826 6.84689 19 7.5 19C8.15311 19 8.70873 18.5826 8.91465 18H16.0854C16.2913 18.5826 16.8469 19 17.5 19C18.1531 19 18.7087 18.5826 18.9146 18H21C22.1046 18 23 17.1046 23 16V11.3333C23 10.9006 22.8596 10.4795 22.6 10.1333L20.1 6.8C19.7223 6.29639 19.1295 6 18.5 6H16C16 4.89543 15.1046 4 14 4H5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 12V13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13V4H16V6H18.5C19.1295 6 19.7223 6.29639 20.1 6.8L22.8 10.4C23.0273 10.703 23.0638 11.1084 22.8944 11.4472C22.725 11.786 22.3788 12 22 12H16ZM16 10H20L18.5 8H16V10Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 17C1 16.4477 1.44772 16 2 16H4.33682C4.89855 14.8175 6.1038 14 7.5 14C9.433 14 11 15.567 11 17.5C11 19.433 9.433 21 7.5 21C5.73676 21 4.27806 19.6961 4.03544 18H2C1.44772 18 1 17.5523 1 17ZM9 17.5C9 18.3284 8.32843 19 7.5 19C6.67157 19 6 18.3284 6 17.5C6 16.6716 6.67157 16 7.5 16C8.32843 16 9 16.6716 9 17.5Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5ZM17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 18.3284 16.6716 19 17.5 19Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default PanelTruckTwoToneMdSVG;