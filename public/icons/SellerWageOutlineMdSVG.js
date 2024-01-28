import React from 'react';

const SellerWageOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 4.90743C8 5.31483 7.74992 5.6763 7.38657 5.86057C4.7838 7.18051 3 9.88191 3 12.9999C3 17.4182 6.58172 20.9999 11 20.9999C14.118 20.9999 16.8194 19.2161 18.1394 16.6134C18.3236 16.25 18.6851 15.9999 19.0925 15.9999H19.18C19.8552 15.9999 20.3347 16.6573 20.0462 17.2678C18.4449 20.6559 14.9962 22.9999 11 22.9999C5.47715 22.9999 1 18.5228 1 12.9999C1 9.00376 3.34404 5.55507 6.73218 3.95379C7.34268 3.66526 8 4.14474 8 4.81999V4.90743Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11 2.95949C11 1.88204 11.8951 0.889697 13.1018 1.00933C18.3228 1.52697 22.473 5.67717 22.9906 10.8982C23.1103 12.1049 22.1179 13 21.0405 13H16.018C13.2466 13 11 10.7533 11 7.98198V2.95949ZM13 3.00956V7.98198C13 9.64878 14.3512 11 16.018 11H20.9904C20.5295 6.80421 17.1958 3.4705 13 3.00956Z'
                fill={color}
            />
        </svg>
    );
};

export default SellerWageOutlineMdSVG;
