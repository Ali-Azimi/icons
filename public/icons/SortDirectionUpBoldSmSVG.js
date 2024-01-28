import React from 'react';

const SortDirectionUpBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2L12.75 6.25L14 6.25C14.3033 6.25 14.5768 6.43273 14.6929 6.71299C14.809 6.99324 14.7448 7.31583 14.5303 7.53033L12.5337 9.52695C12.3977 9.66466 12.2088 9.75 12 9.75C11.8149 9.75 11.6455 9.68298 11.5147 9.57188C11.4992 9.5587 11.4842 9.54484 11.4696 9.53033L9.46965 7.53033C9.25515 7.31583 9.19098 6.99324 9.30707 6.71299C9.42315 6.43273 9.69663 6.25 9.99998 6.25L11.25 6.25L11.25 2Z'
                fill={color}
            />
            <path
                d='M1.25 7C1.25 7.41421 1.58579 7.75 2 7.75H5C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25H2C1.58579 6.25 1.25 6.58579 1.25 7Z'
                fill={color}
            />
            <path
                d='M2 10.75C1.58579 10.75 1.25 10.4142 1.25 10C1.25 9.58579 1.58579 9.25 2 9.25H8C8.41421 9.25 8.75 9.58579 8.75 10C8.75 10.4142 8.41421 10.75 8 10.75H2Z'
                fill={color}
            />
            <path
                d='M2 13.75C1.58579 13.75 1.25 13.4142 1.25 13C1.25 12.5858 1.58579 12.25 2 12.25H14C14.4142 12.25 14.75 12.5858 14.75 13C14.75 13.4142 14.4142 13.75 14 13.75H2Z'
                fill={color}
            />
        </svg>
    );
};

export default SortDirectionUpBoldSmSVG;