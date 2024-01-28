import React from 'react';

const GpsOnOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.00005 9.5C8.82848 9.5 9.50005 8.82843 9.50005 8C9.50005 7.17157 8.82848 6.5 8.00005 6.5C7.17162 6.5 6.50005 7.17157 6.50005 8C6.50005 8.82843 7.17162 9.5 8.00005 9.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.50005 2C8.50005 1.72386 8.27619 1.5 8.00005 1.5C7.72391 1.5 7.50005 1.72386 7.50005 2V3.52746C5.41424 3.75804 3.75809 5.41419 3.52751 7.5H2C1.72386 7.5 1.5 7.72386 1.5 8C1.5 8.27614 1.72386 8.5 2 8.5H3.52751C3.75809 10.5858 5.41424 12.242 7.50005 12.4725V14C7.50005 14.2761 7.72391 14.5 8.00005 14.5C8.27619 14.5 8.50005 14.2761 8.50005 14V12.4725C10.5859 12.242 12.242 10.5858 12.4726 8.5H14C14.2762 8.5 14.5 8.27614 14.5 8C14.5 7.72386 14.2762 7.5 14 7.5H12.4726C12.242 5.41419 10.5859 3.75804 8.50005 3.52746V2ZM4.50005 8C4.50005 9.933 6.06705 11.5 8.00005 11.5C9.93305 11.5 11.5 9.933 11.5 8C11.5 6.067 9.93305 4.5 8.00005 4.5C6.06705 4.5 4.50005 6.067 4.50005 8Z'
                fill={color}
            />
        </svg>
    );
};

export default GpsOnOutlineSmSVG;
