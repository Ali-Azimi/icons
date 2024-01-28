import * as React from 'react';
const ExpandCardOffLgSVG = ({ title, titleId, color = '#9E9E9E', ...props }) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={32} height={32} fill='none' viewBox='0 0 32 32' aria-labelledby={titleId} {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path fill='#E0E0E0' d='M31 16c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15Z' />
        <path fill='#fff' d='M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13Z' />
        <path
            fill={color}
            fillRule='evenodd'
            d='M20.707 17.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L16 14.414l3.293 3.293a1 1 0 0 0 1.414 0Z'
            clipRule='evenodd'
        />
    </svg>
);
export default ExpandCardOffLgSVG;
