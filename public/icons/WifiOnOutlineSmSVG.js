import React from 'react';

const WifiOnOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.69637 6.64578L8 12.2711L13.3036 6.64578C11.8899 5.30765 10.0317 4.5 8 4.5C5.96829 4.5 4.11009 5.30765 2.69637 6.64578ZM1.6362 6.29304C3.25897 4.57184 5.50893 3.5 8 3.5C10.4911 3.5 12.741 4.57184 14.3638 6.29304C14.5454 6.48565 14.5454 6.78643 14.3638 6.97904L8.3638 13.343C8.26933 13.4432 8.13771 13.5 8 13.5C7.86229 13.5 7.73067 13.4432 7.6362 13.343L1.6362 6.97904C1.4546 6.78643 1.4546 6.48565 1.6362 6.29304Z'
                fill={color}
            />
        </svg>
    );
};

export default WifiOnOutlineSmSVG;
