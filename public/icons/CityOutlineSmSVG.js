import React from 'react';

const CityOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.5 8.7247C7.5 8.57542 7.38973 8.45023 7.24395 8.41813C5.67439 8.07253 4.5 6.67341 4.5 5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5C11.5 6.67341 10.3256 8.07253 8.75605 8.41813C8.61027 8.45023 8.5 8.57542 8.5 8.7247V14C8.5 14.2761 8.27614 14.5 8 14.5C7.72386 14.5 7.5 14.2761 7.5 14V8.7247ZM5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5C6.61929 7.5 5.5 6.38071 5.5 5Z'
                fill={color}
            />
        </svg>
    );
};

export default CityOutlineSmSVG;
