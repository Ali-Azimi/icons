import React from 'react';

const PlateCarOutlineSmV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.57311 1.5C4.31446 1.5 3.25208 2.43571 3.09312 3.68428L2.7149 6.65519C1.98705 7.09222 1.5 7.88926 1.5 8.80005V10.6C1.5 11.4285 2.17157 12.1 3 12.1H3.90039V14C3.90039 14.2761 4.12425 14.5 4.40039 14.5C4.67653 14.5 4.90039 14.2761 4.90039 14V12.1H11.0996V14C11.0996 14.2761 11.3235 14.5 11.5996 14.5C11.8758 14.5 12.0996 14.2761 12.0996 14V12.1H13C13.8284 12.1 14.5 11.4285 14.5 10.6V8.80005C14.5 7.88681 14.0103 7.08794 13.2792 6.65167L12.5167 3.42502C12.2501 2.29688 11.2429 1.5 10.0837 1.5H5.57311ZM11.591 11.1C11.5938 11.1 11.5967 11.1 11.5996 11.1C11.6025 11.1 11.6054 11.1 11.6083 11.1H13C13.2761 11.1 13.5 10.8762 13.5 10.6V8.80005C13.5 7.97162 12.8284 7.30005 12 7.30005H4C3.17157 7.30005 2.5 7.97162 2.5 8.80005V10.6C2.5 10.8762 2.72386 11.1 3 11.1H4.39173C4.39461 11.1 4.3975 11.1 4.40039 11.1C4.40328 11.1 4.40617 11.1 4.40905 11.1H11.591ZM4.08512 3.81057C4.18049 3.06143 4.81792 2.5 5.57311 2.5H10.0837C10.7792 2.5 11.3835 2.97813 11.5435 3.65501L12.1686 6.3H3.76819L4.08512 3.81057Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateCarOutlineSmV2SVG;