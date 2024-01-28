import React from 'react';

const CashBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 7C1 5.89543 1.89543 5 3 5H21C22.1046 5 23 5.89543 23 7V17C23 18.1046 22.1046 19 21 19H3C1.89543 19 1 18.1046 1 17V7ZM9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z'
                fill={color}
            />
        </svg>
    );
};

export default CashBoldMdSVG;
