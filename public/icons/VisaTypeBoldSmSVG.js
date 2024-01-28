import React from 'react';

const VisaTypeBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V5.8C1.5 6.62843 2.17157 7.3 3 7.3H13C13.8284 7.3 14.5 6.62843 14.5 5.8V3C14.5 2.17157 13.8284 1.5 13 1.5H3Z'
                fill={color}
            />
            <path
                d='M4.94721 8.77639C4.86252 8.607 4.68939 8.5 4.5 8.5C4.31061 8.5 4.13748 8.607 4.05279 8.77639L1.55279 13.7764C1.47529 13.9314 1.48357 14.1155 1.57468 14.2629C1.66578 14.4103 1.82671 14.5 2 14.5H7C7.17329 14.5 7.33422 14.4103 7.42533 14.2629C7.51643 14.1155 7.52471 13.9314 7.44721 13.7764L4.94721 8.77639Z'
                fill={color}
            />
            <path
                d='M11.5 8.5C9.84315 8.5 8.5 9.84315 8.5 11.5C8.5 13.1569 9.84315 14.5 11.5 14.5C13.1569 14.5 14.5 13.1569 14.5 11.5C14.5 9.84315 13.1569 8.5 11.5 8.5Z'
                fill={color}
            />
        </svg>
    );
};

export default VisaTypeBoldSmSVG;