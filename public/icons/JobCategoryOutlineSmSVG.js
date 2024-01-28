import React from 'react';

const JobCategoryOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.5 3.5C4.5 2.67157 5.17157 2 6 2H10C10.8284 2 11.5 2.67155 11.5 3.49996L11.5001 5H13C13.8284 5 14.5 5.67157 14.5 6.5V6.98797C14.5002 6.99568 14.5002 7.00339 14.5 7.01109V12.5C14.5 13.3284 13.8284 14 13 14H3C2.17157 14 1.5 13.3284 1.5 12.5V6.99979C1.5 6.99997 1.5 6.99961 1.5 6.99979V6.5C1.5 5.67157 2.17157 5 3 5H4.5V3.5ZM2.5 6.72283V6.5C2.5 6.22386 2.72386 6 3 6H13C13.2761 6 13.5 6.22386 13.5 6.5V6.72292L9.85667 9H6.14347L2.5 6.72283ZM13.5 7.90216V12.5C13.5 12.7761 13.2761 13 13 13H3C2.72386 13 2.5 12.7761 2.5 12.5V7.90208L5.73507 9.924C5.81453 9.97366 5.90636 10 6.00007 10H10.0001C10.0938 10 10.1856 9.97366 10.2651 9.924L13.5 7.90216ZM5.5 5H10.5001L10.5 3.49999C10.5 3.22385 10.2762 3 10 3H6C5.72386 3 5.5 3.22386 5.5 3.5V5Z'
                fill={color}
            />
        </svg>
    );
};

export default JobCategoryOutlineSmSVG;
