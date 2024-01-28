import React from 'react';

const VisaSingleOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 4.5C6.61929 4.5 5.5 5.61929 5.5 7C5.5 8.38071 6.61929 9.5 8 9.5C9.38071 9.5 10.5 8.38071 10.5 7C10.5 5.61929 9.38071 4.5 8 4.5ZM6.5 7C6.5 6.17157 7.17157 5.5 8 5.5C8.82843 5.5 9.5 6.17157 9.5 7C9.5 7.82843 8.82843 8.5 8 8.5C7.17157 8.5 6.5 7.82843 6.5 7Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.5 1.5C3.67157 1.5 3 2.17157 3 3V13C3 13.8284 3.67157 14.5 4.5 14.5H11.5C12.3284 14.5 13 13.8284 13 13V3C13 2.17157 12.3284 1.5 11.5 1.5H4.5ZM4 3C4 2.72386 4.22386 2.5 4.5 2.5H11.5C11.7761 2.5 12 2.72386 12 3V13C12 13.2761 11.7761 13.5 11.5 13.5H4.5C4.22386 13.5 4 13.2761 4 13V3Z'
                fill={color}
            />
        </svg>
    );
};

export default VisaSingleOutlineSmSVG;
