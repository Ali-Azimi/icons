import React from 'react';

const MaleBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7C10.3431 7 9 5.65685 9 4Z' fill={color} />
            <path
                d='M16.6187 12.0309C16.37 13.9675 14.8893 15.4914 13 15.8948V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V15.8948C9.11069 15.4914 7.63002 13.9675 7.38134 12.0309L7.00808 9.12403C6.93144 8.52718 7.40951 8 8.0274 8L15.9726 8C16.5905 8 17.0686 8.52718 16.9919 9.12404L16.6187 12.0309Z'
                fill={color}
            />
        </svg>
    );
};

export default MaleBoldMdSVG;
