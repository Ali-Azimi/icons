import React from 'react';

const TickNoneOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.1857 5.6263C11.3921 5.80976 11.4107 6.1258 11.2273 6.33219L7.22726 10.8322C7.13577 10.9351 7.00589 10.9957 6.86824 10.9998C6.73059 11.0038 6.59737 10.9509 6.5 10.8536L4.5 8.85356C4.30474 8.6583 4.30474 8.34171 4.5 8.14645C4.69526 7.95119 5.01184 7.95119 5.20711 8.14645L6.83214 9.77149L10.4798 5.66782C10.6633 5.46143 10.9793 5.44284 11.1857 5.6263Z'
                fill={color}
            />
        </svg>
    );
};

export default TickNoneOutlineSmSVG;
