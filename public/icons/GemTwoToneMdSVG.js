import React from 'react';

const GemTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.34188 2C5.58915 2 4.87461 2.41262 4.52762 3.10565L1.20545 9.74091C0.834786 10.4812 0.976834 11.3593 1.54149 11.9516L10.5219 21.3718C11.3205 22.2094 12.6798 22.2094 13.4783 21.3718L22.4588 11.9516C23.0234 11.3593 23.1655 10.4812 22.7948 9.74091L19.4726 3.10565C19.1256 2.41262 18.4111 2 17.6584 2H6.34188Z'
                fill={color}
            />
        </svg>
    );
};

export default GemTwoToneMdSVG;
