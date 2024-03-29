import React from 'react';

const MobileOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 1.5C4.17157 1.5 3.5 2.17157 3.5 3V13C3.5 13.8284 4.17157 14.5 5 14.5H11C11.8284 14.5 12.5 13.8284 12.5 13V3C12.5 2.17157 11.8284 1.5 11 1.5H5ZM4.5 3C4.5 2.72386 4.72386 2.5 5 2.5H5.37538C5.51304 2.5 5.63303 2.59369 5.66642 2.72724L6.01493 4.12127C6.07057 4.34385 6.27057 4.5 6.5 4.5H9.5C9.72943 4.5 9.92943 4.34385 9.98507 4.12127L10.3336 2.72724C10.367 2.59369 10.487 2.5 10.6246 2.5H11C11.2761 2.5 11.5 2.72386 11.5 3V13C11.5 13.2761 11.2761 13.5 11 13.5H5C4.72386 13.5 4.5 13.2761 4.5 13V3ZM6.64039 2.5H9.35961L9.16642 3.27276C9.13303 3.40631 9.01304 3.5 8.87538 3.5H7.12462C6.98696 3.5 6.86697 3.40631 6.83358 3.27276L6.64039 2.5Z'
                fill={color}
            />
        </svg>
    );
};

export default MobileOutlineSmSVG;
