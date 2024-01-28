import React from 'react';

const EditBoldSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M9.70116 8.25221L13.7322 4.22116C13.818 4.13499 13.8858 4.03268 13.9317 3.92013C13.9777 3.80758 14.0009 3.68704 14 3.56547C13.999 3.4439 13.974 3.32372 13.9264 3.21188C13.8787 3.10005 13.8093 2.99878 13.7222 2.91393L13.0761 2.26777C12.9038 2.09627 12.6706 2 12.4274 2C12.1843 2 11.9511 2.09627 11.7788 2.26777L7.74778 6.29881C7.62846 6.4159 7.54413 6.56393 7.50423 6.72627L7.00719 8.71446C6.9973 8.75295 6.99762 8.79334 7.0081 8.83167C7.01858 8.87 7.03886 8.90493 7.06695 8.93303C7.09505 8.96113 7.13 8.98142 7.16833 8.9919C7.20665 9.00238 7.24705 9.0027 7.28553 8.99281L9.27371 8.49576C9.43605 8.45587 9.58407 8.37153 9.70116 8.25221Z'
                fill={color}
            />
            <path
                d='M10.7656 9.30907L12.2379 7.83681C12.4269 7.64782 12.75 7.78167 12.75 8.04894V12C12.75 13.5188 11.5188 14.75 10 14.75H4C2.48122 14.75 1.25 13.5188 1.25 12V6C1.25 4.48122 2.48122 3.25 4 3.25H7.951C8.21827 3.25 8.35212 3.57314 8.16314 3.76213L6.69092 5.23435C6.37683 5.54484 6.15451 5.93599 6.04845 6.36474L5.5526 8.34818C5.47964 8.63715 5.48265 8.94 5.56123 9.22736C5.64039 9.51683 5.79363 9.78103 6.00629 9.99369C6.21882 10.2062 6.48299 10.3596 6.77263 10.4388C7.06015 10.5174 7.36303 10.5203 7.6519 10.4474L9.63163 9.95243L9.63516 9.95156C10.064 9.8455 10.4551 9.62315 10.7656 9.30907Z'
                fill={color}
            />
        </svg>
    );
};

export default EditBoldSmV1SVG;
