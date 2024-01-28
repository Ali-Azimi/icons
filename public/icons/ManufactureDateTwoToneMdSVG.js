import React from 'react';

const ManufactureDateTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M17.4226 1.18354C17.6877 0.996106 18.0272 0.948989 18.3332 1.05717C21.0507 2.01764 23 4.60919 23 7.6586C23 10.0386 21.8118 12.14 20 13.4038V18.6586C20 20.8677 18.2091 22.6586 16 22.6586C14.3308 22.6586 12.9005 21.6362 12.3009 20.1835C11.2109 21.304 9.68672 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C8.50657 10 8.99847 10.0628 9.46835 10.181C9.16594 9.39854 9 8.54801 9 7.6586C9 4.60919 10.9493 2.01764 13.6668 1.05717C13.9728 0.948989 14.3123 0.996106 14.5774 1.18354C14.8424 1.37097 15 1.67539 15 2.00001V5.04056L16 5.54056L17 5.04056V2.00001C17 1.67539 17.1576 1.37097 17.4226 1.18354Z'
                fill={color}
            />
            <path d='M9 15.5858V12H7V16C7 16.2652 7.10536 16.5196 7.29289 16.7071L9 18.4142L10.4142 17L9 15.5858Z' fill='#040A1F' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 9C4.13401 9 1 12.134 1 16C1 19.866 4.13401 23 8 23C11.866 23 15 19.866 15 16C15 12.134 11.866 9 8 9ZM3 16C3 13.2386 5.23858 11 8 11C10.7614 11 13 13.2386 13 16C13 18.7614 10.7614 21 8 21C5.23858 21 3 18.7614 3 16Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ManufactureDateTwoToneMdSVG;