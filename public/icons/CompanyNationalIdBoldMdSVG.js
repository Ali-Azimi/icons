import React from 'react';

const CompanyNationalIdBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 4C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H19C20.1046 20 21 19.1046 21 18V16H22C22.5523 16 23 15.5523 23 15C23 14.4477 22.5523 14 22 14H21V9H22C22.5523 9 23 8.55228 23 8C23 7.44772 22.5523 7 22 7L21 7V6C21 4.89543 20.1046 4 19 4H3ZM17 10C17 10.5523 16.5523 11 16 11H6C5.44771 11 5 10.5523 5 10C5 9.44772 5.44771 9 6 9H16C16.5523 9 17 9.44772 17 10ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15H10Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyNationalIdBoldMdSVG;
