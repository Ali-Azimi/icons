import React from 'react';

const VisaTypeBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 1C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H20C21.6569 11 23 9.65685 23 8V4C23 2.34315 21.6569 1 20 1H4Z'
                fill={color}
            />
            <path
                d='M8.28886 14.3414C7.55181 12.8673 5.4482 12.8673 4.71115 14.3414L1.82918 20.1053C1.16428 21.4351 2.13127 22.9998 3.61804 22.9998H9.38197C10.8687 22.9998 11.8357 21.4352 11.1708 20.1053L8.28886 14.3414Z'
                fill={color}
            />
            <path
                d='M18.5 14C16.0147 14 14 16.0147 14 18.5C14 20.9853 16.0147 23 18.5 23C20.9853 23 23 20.9853 23 18.5C23 16.0147 20.9853 14 18.5 14Z'
                fill={color}
            />
        </svg>
    );
};

export default VisaTypeBoldMdSVG;
