import React from 'react';

const InstagramBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 1.25C2.92893 1.25 1.25 2.92893 1.25 5V11C1.25 13.0711 2.92893 14.75 5 14.75H11C13.0711 14.75 14.75 13.0711 14.75 11V5C14.75 2.92893 13.0711 1.25 11 1.25H5ZM10.5 8C10.5 9.38071 9.38071 10.5 8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5C9.38071 5.5 10.5 6.61929 10.5 8ZM10.6004 4.49998C10.6004 4.00292 11.0033 3.59998 11.5004 3.59998C11.9974 3.59998 12.4004 4.00292 12.4004 4.49998C12.4004 4.99703 11.9974 5.39998 11.5004 5.39998C11.0033 5.39998 10.6004 4.99703 10.6004 4.49998Z'
                fill={color}
            />
        </svg>
    );
};

export default InstagramBoldSmSVG;
