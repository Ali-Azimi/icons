import React from 'react';

const DropdownTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z'
                fill={color}
            />
            <path
                d='M11.2076 16.9706C11.6079 17.4906 12.3921 17.4906 12.7924 16.9706L17.6888 10.61C18.195 9.95242 17.7263 9 16.8964 9H7.10358C6.27374 9 5.80497 9.95242 6.31117 10.61L11.2076 16.9706Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default DropdownTwoToneMdSVG;
