import React from 'react';

const ManufactureDateOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M18.3332 1.05717C18.0272 0.948989 17.6876 0.996106 17.4226 1.18354C17.1575 1.37097 17 1.67539 17 2.00001V5.04056L16 5.54056L15 5.04056V2.00001C15 1.67539 14.8424 1.37097 14.5774 1.18354C14.3123 0.996106 13.9728 0.948989 13.6667 1.05717C11.2777 1.90156 9.48237 4.00659 9.08331 6.57509C9.04175 6.84255 9.23981 7.08059 9.50671 7.12557C9.79158 7.17359 10.0719 7.23499 10.347 7.3091C10.6744 7.39731 11.0125 7.16481 11.0683 6.83033C11.2837 5.53829 11.9946 4.41314 13 3.65795V5.6586C13 6.03737 13.214 6.38363 13.5528 6.55302L15.5528 7.55302C15.8343 7.69379 16.1657 7.69379 16.4472 7.55302L18.4472 6.55302C18.786 6.38363 19 6.03737 19 5.6586V3.65795C20.215 4.57063 21 6.02366 21 7.6586C21 9.50804 19.9964 11.1243 18.4992 11.9903C18.1903 12.169 18 12.4989 18 12.8559V18.6586C18 19.7632 17.1045 20.6586 16 20.6586C15.8262 20.6586 15.6568 20.7356 15.5624 20.8815C15.3577 21.1979 15.1338 21.5007 14.8921 21.7881C14.6662 22.0568 14.7501 22.4757 15.0921 22.5551C15.3837 22.6228 15.6877 22.6586 16 22.6586C18.2091 22.6586 20 20.8677 20 18.6586V13.4038C21.8118 12.14 23 10.0386 23 7.6586C23 4.60919 21.0507 2.01764 18.3332 1.05717Z'
                fill={color}
            />
            <path d='M9 12V15.5858L10.4142 17L9 18.4142L7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16V12H9Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 16C1 12.134 4.13401 9 8 9C11.866 9 15 12.134 15 16C15 19.866 11.866 23 8 23C4.13401 23 1 19.866 1 16ZM8 11C5.23858 11 3 13.2386 3 16C3 18.7614 5.23858 21 8 21C10.7614 21 13 18.7614 13 16C13 13.2386 10.7614 11 8 11Z'
                fill={color}
            />
        </svg>
    );
};

export default ManufactureDateOutlineMdSVG;