import React from 'react';

const MailBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.92698 3.88342C1.84567 3.82714 1.81704 3.70661 1.89362 3.64405C2.19513 3.39774 2.58031 3.25 3 3.25H13C13.4197 3.25 13.805 3.39778 14.1065 3.64415C14.183 3.70669 14.1544 3.82716 14.0732 3.88342L8.00007 8.08787L1.92698 3.88342Z'
                fill={color}
            />
            <path
                d='M1.25 5.62085C1.25 5.45952 1.4312 5.36458 1.56384 5.45641L7.57316 9.61671C7.82999 9.79452 8.17014 9.79452 8.42698 9.61671L14.4362 5.45651C14.5688 5.36468 14.75 5.45961 14.75 5.62095V9C14.75 11.0711 13.0711 12.75 11 12.75H5C2.92893 12.75 1.25 11.0711 1.25 9V5.62085Z'
                fill={color}
            />
        </svg>
    );
};

export default MailBoldSmSVG;
