import * as React from 'react';

function QRcodeOutlineMdSVG({ color = '040A1F', ...props }) {
    return (
        <svg width={24} height={24} fill='none' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H3zm1 7V4h5v5H4zm10-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1h-7zm1 7V4h5v5h-5zM2 14a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7zm2 1v5h5v-5H4zm9-1.5a.5.5 0 01.5-.5H17a.5.5 0 01.5.5v4h-4a.5.5 0 01-.5-.5v-3.5zm4.5 4h4a.5.5 0 01.5.5v3.5a.5.5 0 01-.5.5H18a.5.5 0 01-.5-.5v-4z'
                fill={color}
                fillOpacity={0.6}
            />
        </svg>
    );
}

export default QRcodeOutlineMdSVG;
