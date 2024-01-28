import React from 'react';

const InfoOnBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM10.5 7C10.5 6.17157 11.1715 5.5 12 5.5C12.8284 5.5 13.5 6.17157 13.5 7C13.5 7.82843 12.8284 8.5 12 8.5C11.1715 8.5 10.5 7.82843 10.5 7ZM9.84998 10.4C9.29769 10.4 8.84998 10.8477 8.84998 11.4C8.84998 11.9523 9.29769 12.4 9.84998 12.4H11.7626L10.44 16.3676C10.0083 17.6626 10.9723 19 12.3374 19H13.15C13.7023 19 14.15 18.5523 14.15 18C14.15 17.4477 13.7023 17 13.15 17H12.3374L13.6599 13.0325C14.0916 11.7374 13.1277 10.4 11.7626 10.4H9.84998Z'
                fill={color}
            />
        </svg>
    );
};

export default InfoOnBoldMdSVG;
