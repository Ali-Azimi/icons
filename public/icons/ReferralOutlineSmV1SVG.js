import React from 'react';

const ReferralOutlineSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.0196 1.64645C10.8243 1.45118 10.5077 1.45118 10.3125 1.64645C10.1172 1.84171 10.1172 2.15829 10.3125 2.35355L10.7922 2.83325H9.66667C7.53466 2.83325 5.77666 4.43451 5.52968 6.5H4C3.17157 6.5 2.5 7.17157 2.5 8V12C2.5 13.3807 3.61929 14.5 5 14.5H11C12.3807 14.5 13.5 13.3807 13.5 12V8C13.5 7.17157 12.8284 6.5 12 6.5H6.53924C6.77893 4.98863 8.08787 3.83325 9.66667 3.83325H10.7923L10.3125 4.31311C10.1172 4.50838 10.1172 4.82496 10.3125 5.02022C10.5077 5.21548 10.8243 5.21548 11.0196 5.02022L12.339 3.70076C12.3489 3.69165 12.3584 3.68215 12.3675 3.67229L12.7065 3.33333L12.3693 2.9962C12.3591 2.98496 12.3483 2.97419 12.337 2.96393L11.0196 1.64645ZM4.3144 7.5H11.6856L8.00002 10.3666L4.3144 7.5ZM12.5 8.13347V12C12.5 12.8284 11.8284 13.5 11 13.5H5C4.17157 13.5 3.5 12.8284 3.5 12V8.13344L7.69305 11.3947C7.87361 11.5351 8.12644 11.5351 8.30699 11.3947L12.5 8.13347Z'
                fill={color}
            />
        </svg>
    );
};

export default ReferralOutlineSmV1SVG;