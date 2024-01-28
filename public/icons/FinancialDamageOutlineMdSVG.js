import React from 'react';

const FinancialDamageOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 5C1 3.89543 1.89543 3 3 3H17C17.5523 3 18 3.44772 18 4V8C18 8.22707 17.9227 8.44738 17.7809 8.62469L16.1033 10.7216L16.9615 13.7253C17.0477 14.027 16.9873 14.3517 16.7983 14.6022C16.6094 14.8527 16.3138 15 16 15H3C1.89543 15 1 14.1046 1 13V5ZM16 5L3 5V13H14.6743L14.0385 10.7747C13.9495 10.4633 14.0168 10.1282 14.2191 9.87531L16 7.64922V5ZM21 10H19V8H21C22.1046 8 23 8.89543 23 10V18C23 19.1046 22.1046 20 21 20H13V18H21V10ZM12 9C12 10.1046 11.1046 11 10 11C8.89543 11 8 10.1046 8 9C8 7.89543 8.89543 7 10 7C11.1046 7 12 7.89543 12 9Z'
                fill={color}
            />
        </svg>
    );
};

export default FinancialDamageOutlineMdSVG;
