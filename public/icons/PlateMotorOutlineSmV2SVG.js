import React from 'react';

const PlateMotorOutlineSmV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.66753 3.5C3.79605 3.5 1.5 5.91142 1.5 8.84615C1.5 11.3985 3.49752 13.5 6.00074 13.5H12.3726C13.9792 13.5 14.9638 11.7675 14.2768 10.3409L12.7234 7.11525C11.6599 4.90682 9.47865 3.5 7.08008 3.5H6.66753ZM2.5 8.84615C2.5 6.42797 4.3834 4.5 6.66753 4.5H7.08008C8.28412 4.5 9.43008 4.92538 10.3486 5.67342L5.85633 7.0211C5.64483 7.08454 5.5 7.27921 5.5 7.50001V9.00001C5.5 9.27615 5.72386 9.50001 6 9.50001H12.7619L13.3758 10.7748C13.7695 11.5922 13.1824 12.5 12.3726 12.5H6.00074C4.08487 12.5 2.5 10.882 2.5 8.84615ZM12.2804 8.50001H6.5V7.87203L11.1437 6.47892L11.1473 6.47782C11.4079 6.80197 11.6353 7.16047 11.8225 7.54913L12.2804 8.50001Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateMotorOutlineSmV2SVG;
