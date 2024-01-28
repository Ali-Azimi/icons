import React from 'react';

const BlockOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C14.6911 3 17.1063 4.18109 18.7555 6.05318L4.09666 16.309C3.39744 15.0293 3 13.5611 3 12ZM5.24449 17.9469C6.89375 19.8189 9.30895 21 12 21C16.9706 21 21 16.9706 21 12C21 10.439 20.6026 8.97074 19.9034 7.69102L5.24449 17.9469Z'
                fill={color}
            />
        </svg>
    );
};

export default BlockOutlineMdSVG;
