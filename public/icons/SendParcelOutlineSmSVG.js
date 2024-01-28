import React from 'react';

const SendParcelOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V5C1.5 5.82843 2.17157 6.5 3 6.5V13C3 13.8284 3.67157 14.5 4.5 14.5H10V13.5H4.5C4.22386 13.5 4 13.2761 4 13V6.5H13C13.8284 6.5 14.5 5.82843 14.5 5V3C14.5 2.17157 13.8284 1.5 13 1.5H3ZM3 5.5C2.72386 5.5 2.5 5.27614 2.5 5V3C2.5 2.72386 2.72386 2.5 3 2.5H13C13.2761 2.5 13.5 2.72386 13.5 3V5C13.5 5.27614 13.2761 5.5 13 5.5H3Z'
                fill={color}
            />
            <path
                d='M12.8374 8.63097C12.8434 8.63647 12.8493 8.6421 12.855 8.64787L14.3536 10.1464C14.5488 10.3417 14.5488 10.6583 14.3536 10.8536C14.1583 11.0488 13.8417 11.0488 13.6464 10.8536L13 10.2071V13C13 13.2762 12.7761 13.5 12.5 13.5C12.2239 13.5 12 13.2762 12 13V10.2071L11.3536 10.8536C11.1583 11.0488 10.8417 11.0488 10.6464 10.8536C10.4512 10.6583 10.4512 10.3417 10.6464 10.1465L12.1442 8.64873L12.1464 8.64645C12.3364 8.45649 12.6412 8.45133 12.8374 8.63097Z'
                fill={color}
            />
        </svg>
    );
};

export default SendParcelOutlineSmSVG;
