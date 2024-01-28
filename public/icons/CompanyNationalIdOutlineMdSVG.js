import React from 'react';

const CompanyNationalIdOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 6C1 4.89543 1.89543 4 3 4H19C20.1046 4 21 4.89543 21 6V7H22C22.5523 7 23 7.44772 23 8C23 8.55228 22.5523 9 22 9H21V14H22C22.5523 14 23 14.4477 23 15C23 15.5523 22.5523 16 22 16H21V18C21 19.1046 20.1046 20 19 20H3C1.89543 20 1 19.1046 1 18V6ZM19 15V8V6L3 6V18L19 18V15ZM17 10C17 10.5523 16.5523 11 16 11H6C5.44771 11 5 10.5523 5 10C5 9.44772 5.44771 9 6 9H16C16.5523 9 17 9.44772 17 10ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15H10Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyNationalIdOutlineMdSVG;
