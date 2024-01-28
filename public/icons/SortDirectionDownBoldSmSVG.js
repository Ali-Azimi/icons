import React from 'react';

const SortDirectionDownBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3C1.25 3.41421 1.58579 3.75 2 3.75H14C14.4142 3.75 14.75 3.41421 14.75 3C14.75 2.58579 14.4142 2.25 14 2.25H2Z'
                fill={color}
            />
            <path
                d='M2 5.25C1.58579 5.25 1.25 5.58579 1.25 6C1.25 6.41421 1.58579 6.75 2 6.75H8C8.41421 6.75 8.75 6.41421 8.75 6C8.75 5.58579 8.41421 5.25 8 5.25H2Z'
                fill={color}
            />
            <path
                d='M1.25 9C1.25 8.58579 1.58579 8.25 2 8.25H5C5.41421 8.25 5.75 8.58579 5.75 9C5.75 9.41421 5.41421 9.75 5 9.75H2C1.58579 9.75 1.25 9.41421 1.25 9Z'
                fill={color}
            />
            <path
                d='M11.25 7C11.25 6.58579 11.5858 6.25 12 6.25C12.4142 6.25 12.75 6.58579 12.75 7L12.75 11.25H14C14.3033 11.25 14.5768 11.4327 14.6929 11.713C14.809 11.9932 14.7448 12.3158 14.5303 12.5303L12.5337 14.5269C12.3977 14.6647 12.2088 14.75 12 14.75C11.8149 14.75 11.6455 14.683 11.5147 14.5719C11.4992 14.5587 11.4842 14.5448 11.4696 14.5303L9.46965 12.5303C9.25515 12.3158 9.19098 11.9932 9.30707 11.713C9.42315 11.4327 9.69663 11.25 9.99998 11.25H11.25L11.25 7Z'
                fill={color}
            />
        </svg>
    );
};

export default SortDirectionDownBoldSmSVG;