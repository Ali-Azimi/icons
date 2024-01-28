import React from 'react';

const InfoOnOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z'
                fill={color}
            />
            <path
                d='M12 5.5C11.1715 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1715 8.5 12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5Z'
                fill={color}
            />
            <path
                d='M8.84998 11.4C8.84998 10.8477 9.29769 10.4 9.84998 10.4H11.7626C13.1277 10.4 14.0916 11.7374 13.6599 13.0325L12.3374 17H13.15C13.7023 17 14.15 17.4477 14.15 18C14.15 18.5523 13.7023 19 13.15 19H12.3374C10.9723 19 10.0083 17.6626 10.44 16.3676L11.7626 12.4H9.84998C9.29769 12.4 8.84998 11.9523 8.84998 11.4Z'
                fill={color}
            />
        </svg>
    );
};

export default InfoOnOutlineMdSVG;