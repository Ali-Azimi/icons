import React from 'react';

const SortSecondaryBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2.30711 4.28701C2.19103 4.00676 2.25519 3.68417 2.46969 3.46967L4.4663 1.47306C4.60228 1.33535 4.79117 1.25 5 1.25C5.18492 1.25001 5.35423 1.31693 5.48499 1.42789C5.50062 1.44114 5.51575 1.45507 5.53035 1.46967L7.53035 3.46967C7.74485 3.68417 7.80902 4.00676 7.69293 4.28701C7.57685 4.56727 7.30337 4.75 7.00002 4.75L5.75 4.75L5.75 9C5.75 9.41421 5.41421 9.75 5 9.75C4.58579 9.75 4.25 9.41421 4.25 9L4.25 4.75L3.00002 4.75C2.69668 4.75 2.4232 4.56727 2.30711 4.28701Z'
                fill={color}
            />
            <path
                d='M10.25 7C10.25 6.58579 10.5858 6.25 11 6.25C11.4142 6.25 11.75 6.58579 11.75 7L11.75 11.25H13C13.3033 11.25 13.5768 11.4327 13.6929 11.713C13.809 11.9932 13.7448 12.3158 13.5303 12.5303L11.5337 14.5269C11.3977 14.6647 11.2088 14.75 11 14.75C10.8149 14.75 10.6455 14.683 10.5147 14.5719C10.4992 14.5587 10.4842 14.5448 10.4696 14.5303L8.46965 12.5303C8.25515 12.3158 8.19098 11.9932 8.30707 11.713C8.42315 11.4327 8.69663 11.25 8.99998 11.25H10.25L10.25 7Z'
                fill={color}
            />
        </svg>
    );
};

export default SortSecondaryBoldSmSVG;
