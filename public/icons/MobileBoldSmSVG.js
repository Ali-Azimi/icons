import React from 'react';

const MobileBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.25 3C3.25 2.0335 4.0335 1.25 5 1.25H11C11.9665 1.25 12.75 2.0335 12.75 3V13C12.75 13.9665 11.9665 14.75 11 14.75H5C4.0335 14.75 3.25 13.9665 3.25 13V3ZM9.95943 2.75L9.52781 4.04487C9.48697 4.16737 9.37233 4.25 9.2432 4.25H6.7568C6.62767 4.25 6.51303 4.16737 6.47219 4.04487L6.04057 2.75H9.95943Z'
                fill={color}
            />
        </svg>
    );
};

export default MobileBoldSmSVG;
