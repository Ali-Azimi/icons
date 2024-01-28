import React from 'react';

const SignatureBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.97758 1C7.69676 1 7.42887 1.11808 7.23942 1.32537C7.04997 1.53266 6.95641 1.81006 6.98161 2.08975C6.99377 2.22463 7 2.36146 7 2.5C7 4.2473 6.00436 5.76378 4.54483 6.50989C4.21043 6.68083 4 7.02473 4 7.40029V8C4 8.17705 4.04701 8.35093 4.13622 8.50387L11 20.2704V22C11 22.5523 11.4477 23 12 23H16.5C18.433 23 20 21.433 20 19.5C20 18.6716 20.6716 18 21.5 18H22C22.5523 18 23 17.5523 23 17C23 16.4477 22.5523 16 22 16H21.5C19.567 16 18 17.567 18 19.5C18 20.3284 17.3284 21 16.5 21H13V20.2703L19.8638 8.50387C19.953 8.35093 20 8.17705 20 8V7.40029C20 7.02473 19.7896 6.68083 19.4552 6.50989C17.9956 5.76378 17 4.2473 17 2.5C17 2.36146 17.0062 2.22463 17.0184 2.08975C17.0436 1.81006 16.95 1.53266 16.7606 1.32537C16.5711 1.11808 16.3032 1 16.0224 1H7.97758ZM10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8Z'
                fill={color}
            />
        </svg>
    );
};

export default SignatureBoldMdSVG;
