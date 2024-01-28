import React from 'react';

const CoverageOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12.9557 2C12.9557 1.44772 12.508 1 11.9557 1C11.4034 1 10.9557 1.44772 10.9557 2V3C10.9557 3.01625 10.9561 3.03241 10.9569 3.04847C5.71227 3.53808 1.52994 7.68048 1.00989 12.9023C0.889481 14.1114 1.88745 15 2.96001 15H8.987C9.53928 15 9.987 14.5523 9.987 14C9.987 13.4477 9.53928 13 8.987 13H3.01063C3.50956 8.50407 7.3414 5 12.0005 5C16.6596 5 20.4914 8.50407 20.9904 13H14.0095C12.3519 13 11.0005 14.3389 11.0005 16V20.5C11.0005 20.7719 10.7779 21 10.4937 21C10.2096 21 9.987 20.7719 9.987 20.5V20C9.987 19.4477 9.53928 19 8.987 19C8.43472 19 7.987 19.4477 7.987 20V20.5C7.987 21.8849 9.11355 23 10.4937 23C11.874 23 13.0005 21.8849 13.0005 20.5V16C13.0005 15.4519 13.448 15 14.0095 15H21.041C22.1135 15 23.1115 14.1114 22.9911 12.9023C22.4681 7.65091 18.2412 3.4912 12.9549 3.04051C12.9554 3.02707 12.9557 3.01357 12.9557 3V2Z'
                fill={color}
            />
        </svg>
    );
};

export default CoverageOutlineMdSVG;