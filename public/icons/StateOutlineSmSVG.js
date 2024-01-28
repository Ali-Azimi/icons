import React from 'react';

const StateOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.5 1.5C9.66718 1.5 9.82329 1.58355 9.91603 1.72265L10.7676 3H12.5C13.3284 3 14 3.67157 14 4.5V12C14 13.3807 12.8807 14.5 11.5 14.5H4.5C3.11929 14.5 2 13.3807 2 12V4.5C2 3.67157 2.67157 3 3.5 3H5.23241L6.08397 1.72265C6.17671 1.58355 6.33282 1.5 6.5 1.5H9.5ZM5 4V5.5C5 5.77614 5.22386 6 5.5 6H10.5C10.7761 6 11 5.77614 11 5.5V4H12.5C12.7761 4 13 4.22386 13 4.5V12C13 12.8284 12.3284 13.5 11.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12V4.5C3 4.22386 3.22386 4 3.5 4H5ZM10 5H6V3.65139L6.76759 2.5H9.23241L10 3.65139V5Z'
                fill={color}
            />
        </svg>
    );
};

export default StateOutlineSmSVG;
