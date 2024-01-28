import React from 'react';

const IssueOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.30046 21L10.1208 2.31298C10.7598 0.562334 13.2402 0.562347 13.8792 2.31298L20.6996 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H3.30046ZM7.61938 15L9.07929 11H14.9203L16.3804 15H7.61938ZM6.89154 16.9942L5.42951 21H18.5705L17.1083 16.9942C17.0727 16.998 17.0366 17 17 17H7C6.96335 17 6.92717 16.998 6.89154 16.9942ZM14.1902 9H9.80925L11.9996 2.99869L14.1902 9Z'
                fill={color}
            />
        </svg>
    );
};

export default IssueOutlineMdSVG;
