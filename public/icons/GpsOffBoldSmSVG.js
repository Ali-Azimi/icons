import React from 'react';

const GpsOffBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.75005 3.56222V2C8.75005 1.58579 8.41426 1.25 8.00005 1.25C7.58583 1.25 7.25005 1.58579 7.25005 2V3.56222C5.36567 3.87836 3.87841 5.36562 3.56227 7.25H2C1.58579 7.25 1.25 7.58579 1.25 8C1.25 8.41421 1.58579 8.75 2 8.75H3.56227C3.67698 9.43374 3.94588 10.0652 4.33199 10.6074L1.46972 13.4697C1.17683 13.7626 1.17683 14.2374 1.46972 14.5303C1.76261 14.8232 2.23749 14.8232 2.53038 14.5303L14.5304 2.53033C14.8233 2.23744 14.8233 1.76256 14.5304 1.46967C14.2375 1.17678 13.7626 1.17678 13.4697 1.46967L10.6075 4.33194C10.0653 3.94583 9.43379 3.67693 8.75005 3.56222ZM8.38858 6.55081L6.55086 8.38853C6.51772 8.26461 6.50005 8.13437 6.50005 8C6.50005 7.17157 7.17162 6.5 8.00005 6.5C8.13442 6.5 8.26466 6.51767 8.38858 6.55081Z'
                fill={color}
            />
            <path
                d='M12.4378 7.25C12.3894 6.96135 12.0404 6.87383 11.8335 7.08079L7.08083 11.8334C6.87387 12.0404 6.9614 12.3894 7.25005 12.4378V14C7.25005 14.4142 7.58583 14.75 8.00005 14.75C8.41426 14.75 8.75005 14.4142 8.75005 14V12.4378C10.6344 12.1216 12.1217 10.6344 12.4378 8.75H14C14.4143 8.75 14.75 8.41421 14.75 8C14.75 7.58579 14.4143 7.25 14 7.25H12.4378Z'
                fill={color}
            />
        </svg>
    );
};

export default GpsOffBoldSmSVG;