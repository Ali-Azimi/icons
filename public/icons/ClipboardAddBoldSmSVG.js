import React from 'react';

const ClipboardAddBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.3 1.5C5.13431 1.5 5 1.63431 5 1.8V4.2C5 4.36569 5.13431 4.5 5.3 4.5H8.7C8.86569 4.5 9 4.36569 9 4.2V1.8C9 1.63431 8.86569 1.5 8.7 1.5H5.3Z'
                fill={color}
            />
            <path
                d='M10.5 4.5V3.05C10.5 2.88431 10.6343 2.75 10.8 2.75H12C12.4142 2.75 12.75 3.08579 12.75 3.5V6.7003C12.75 6.91306 12.5323 7.05984 12.3222 7.02582C12.2173 7.00883 12.1097 7 12 7C10.997 7 10.1665 7.73828 10.0222 8.70104C9.99763 8.8649 9.8649 8.99763 9.70104 9.02219C8.73828 9.16649 8 9.99703 8 11C8 12.003 8.73828 12.8335 9.70104 12.9778C9.8649 13.0024 9.99763 13.1351 10.0222 13.299C10.0561 13.5252 10.1279 13.739 10.2309 13.9338C10.3757 14.2075 10.1817 14.75 9.87206 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14V3.5C1.25 3.08579 1.58579 2.75 2 2.75H3.2C3.36569 2.75 3.5 2.88431 3.5 3.05V4.5C3.5 5.32843 4.17157 6 5 6H9C9.82843 6 10.5 5.32843 10.5 4.5Z'
                fill={color}
            />
            <path
                d='M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V10.25H14C14.4142 10.25 14.75 10.5858 14.75 11C14.75 11.4142 14.4142 11.75 14 11.75H12.75V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V11.75H10C9.58579 11.75 9.25 11.4142 9.25 11C9.25 10.5858 9.58579 10.25 10 10.25H11.25V9C11.25 8.58579 11.5858 8.25 12 8.25Z'
                fill={color}
            />
        </svg>
    );
};

export default ClipboardAddBoldSmSVG;