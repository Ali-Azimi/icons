import React from 'react';

const SellerWageTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 3V8.00002C12 10.2092 13.7909 12 16 12H21V13C21 18.5228 16.5228 23 11 23C5.47715 23 1 18.5228 1 13C1 7.47715 5.47715 3 11 3H12Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11 2.96293C11 1.88398 11.8964 0.890005 13.105 1.00984C18.3241 1.52728 22.4727 5.67589 22.9902 10.895C23.11 12.1036 22.116 13 21.0371 13H16.0185C13.2469 13 11 10.7531 11 7.98147V2.96293ZM13.0074 3.01798V7.98147C13.0074 9.64446 14.3555 10.9926 16.0185 10.9926H20.982C20.5198 6.80622 17.1938 3.48024 13.0074 3.01798Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default SellerWageTwoToneMdSVG;
