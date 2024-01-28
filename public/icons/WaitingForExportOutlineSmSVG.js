import React from 'react';

const WaitingForExportOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 1.5C5.17157 1.5 4.5 2.17157 4.5 3V4.5H4C2.61929 4.5 1.5 5.61929 1.5 7V12C1.5 12.2761 1.72386 12.5 2 12.5H4.5V13C4.5 13.8284 5.17157 14.5 6 14.5H10C10.8284 14.5 11.5 13.8284 11.5 13V12.5H14C14.2761 12.5 14.5 12.2761 14.5 12V7C14.5 5.61929 13.3807 4.5 12 4.5H11.5V3C11.5 2.17157 10.8284 1.5 10 1.5H6ZM2.5 11.5H4.5V9.5H4.40039C4.12425 9.5 3.90039 9.27614 3.90039 9C3.90039 8.72386 4.12425 8.5 4.40039 8.5H11.6004C11.8765 8.5 12.1004 8.72386 12.1004 9C12.1004 9.27614 11.8765 9.5 11.6004 9.5H11.5V11.5H13.5V7C13.5 6.17157 12.8284 5.5 12 5.5H4C3.17157 5.5 2.5 6.17157 2.5 7V11.5ZM10.5 9.5V13C10.5 13.2761 10.2761 13.5 10 13.5H6C5.72386 13.5 5.5 13.2761 5.5 13V9.5H10.5ZM10.5 4.5H5.5V3C5.5 2.72386 5.72386 2.5 6 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V4.5Z'
                fill={color}
            />
        </svg>
    );
};

export default WaitingForExportOutlineSmSVG;
