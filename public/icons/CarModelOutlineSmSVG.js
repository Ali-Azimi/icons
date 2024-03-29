import React from 'react';

const CarModelOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.42875 1.74275C8.33838 1.59215 8.17563 1.5 8 1.5C7.82437 1.5 7.66162 1.59215 7.57125 1.74275L4.57125 6.74275C4.47857 6.89722 4.47615 7.08959 4.5649 7.24635C4.65365 7.4031 4.81986 7.5 5 7.5H11C11.1801 7.5 11.3463 7.4031 11.4351 7.24635C11.5239 7.08959 11.5214 6.89722 11.4287 6.74275L8.42875 1.74275ZM5.88309 6.5L8 2.97183L10.1169 6.5H5.88309Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12ZM12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.5 10C1.5 9.72386 1.72386 9.5 2 9.5H6C6.27614 9.5 6.5 9.72386 6.5 10V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V10ZM2.5 13.5H5.5V10.5H2.5V13.5Z'
                fill={color}
            />
        </svg>
    );
};

export default CarModelOutlineSmSVG;
