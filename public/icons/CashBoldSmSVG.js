import React from 'react';

const CashBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14 3.5C14.2761 3.5 14.5 3.72386 14.5 4V12C14.5 12.2761 14.2761 12.5 14 12.5H2.00001C1.72387 12.5 1.50001 12.2761 1.50001 12L1.5 4C1.5 3.86739 1.55268 3.74021 1.64645 3.64645C1.74021 3.55268 1.86739 3.5 2 3.5H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z'
                fill={color}
            />
        </svg>
    );
};

export default CashBoldSmSVG;
