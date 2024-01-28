import React from 'react';

const PaymentInfoBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11 1C10.4477 1 10 1.44772 10 2V3.7C10 3.86569 10.1343 4 10.3 4H11C12.1046 4 13 3.10457 13 2V1.3C13 1.13431 12.8657 1 12.7 1H11Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.3 1C15.1343 1 15 1.13431 15 1.3V2C15 4.20914 13.2091 6 11 6H10.3C10.1343 6 10 6.13431 10 6.3V11.7C10 11.8657 10.1343 12 10.3 12H12C13.6569 12 15 13.3431 15 15V19.7C15 19.8657 15.1343 20 15.3 20H17.7C17.8657 20 18 19.8657 18 19.7V19C18 16.7909 19.7909 15 22 15H22.7C22.8657 15 23 14.8657 23 14.7V6.3C23 6.13431 22.8657 6 22.7 6H22C19.7909 6 18 4.20914 18 2V1.3C18 1.13431 17.8657 1 17.7 1H15.3ZM18.5 10.5C18.5 11.6046 17.6046 12.5 16.5 12.5C15.3954 12.5 14.5 11.6046 14.5 10.5C14.5 9.39543 15.3954 8.5 16.5 8.5C17.6046 8.5 18.5 9.39543 18.5 10.5Z'
                fill={color}
            />
            <path
                d='M22 17H22.7C22.8657 17 23 17.1343 23 17.3V19C23 19.5523 22.5523 20 22 20H20.3C20.1343 20 20 19.8657 20 19.7V19C20 17.8954 20.8954 17 22 17Z'
                fill={color}
            />
            <path
                d='M23 2V3.7C23 3.86569 22.8657 4 22.7 4H22C20.8954 4 20 3.10457 20 2V1.3C20 1.13431 20.1343 1 20.3 1H22C22.5523 1 23 1.44772 23 2Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 15V22C1 22.5523 1.44772 23 2 23H12C12.5523 23 13 22.5523 13 22V15C13 14.4477 12.5523 14 12 14H2C1.44772 14 1 14.4477 1 15ZM10 19.2C10 19.3657 9.86569 19.5 9.7 19.5H4.3C4.13431 19.5 4 19.3657 4 19.2V17.5H9.7C9.86569 17.5 10 17.6343 10 17.8V19.2Z'
                fill={color}
            />
        </svg>
    );
};

export default PaymentInfoBoldMdSVG;