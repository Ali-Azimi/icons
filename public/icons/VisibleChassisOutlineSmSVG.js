import React from 'react';

const VisibleChassisOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M2.50988 5.95617L2.5 6.00087L2.51033 5.95522' fill={color} />
            <path
                d='M6.75 6C6.75 5.30964 7.30964 4.75 8 4.75C8.69036 4.75 9.25 5.30964 9.25 6C9.25 6.69036 8.69036 7.25 8 7.25C7.30964 7.25 6.75 6.69036 6.75 6Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 1.5C6.66343 1.49944 5.35398 1.877 4.22291 2.58906C3.09178 3.30117 2.18521 4.31876 1.60796 5.52426L1.60752 5.52519C1.53677 5.67372 1.5 5.83623 1.5 6.00087C1.5 6.16551 1.53677 6.32801 1.60752 6.47654L1.60815 6.47787C2.18625 7.68246 3.09301 8.69917 4.22391 9.4108C5.35481 10.1224 6.66381 10.5 8 10.5C9.33619 10.5 10.6452 10.1224 11.7761 9.4108C12.907 8.69917 13.8137 7.68246 14.3919 6.47787L14.3925 6.47654C14.4632 6.32801 14.5 6.16551 14.5 6.00087C14.5 5.83623 14.4632 5.67372 14.3925 5.52519L14.392 5.52426C13.8148 4.31876 12.9082 3.30117 11.7771 2.58906C10.646 1.877 9.33657 1.49944 8 1.5ZM4.75568 3.43532C5.72713 2.82374 6.85181 2.49948 7.99977 2.5C9.14774 2.49948 10.2729 2.82374 11.2443 3.43532C12.2156 4.0468 12.9941 4.92053 13.4899 5.9556C13.4965 5.96981 13.5 5.98528 13.5 6.00087C13.5 6.01645 13.4966 6.0319 13.4899 6.0461C12.9933 7.08038 12.2146 7.95335 11.2435 8.56442C10.2721 9.17568 9.14774 9.5 8 9.5C6.85226 9.5 5.72789 9.17568 4.7565 8.56442C3.7854 7.95335 3.00673 7.0804 2.51015 6.04613C2.50345 6.03192 2.5 6.01646 2.5 6.00087C2.5 5.98549 2.50336 5.97023 2.50988 5.95617M4.75568 3.43532C3.78451 4.04672 3.00611 4.92031 2.51033 5.95522L4.75568 3.43532Z'
                fill={color}
            />
            <path
                d='M2 11.5C1.72386 11.5 1.5 11.7239 1.5 12C1.5 12.2761 1.72386 12.5 2 12.5H8C8.27614 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.27614 11.5 8 11.5H2Z'
                fill={color}
            />
            <path
                d='M2 13.5C1.72386 13.5 1.5 13.7239 1.5 14C1.5 14.2761 1.72386 14.5 2 14.5H5C5.27614 14.5 5.5 14.2761 5.5 14C5.5 13.7239 5.27614 13.5 5 13.5H2Z'
                fill={color}
            />
        </svg>
    );
};

export default VisibleChassisOutlineSmSVG;