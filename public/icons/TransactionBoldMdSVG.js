import React from 'react';

const TransactionBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C3.68629 1 1 3.68629 1 7V22C1 22.5523 1.44772 23 2 23H11C14.3137 23 17 20.3137 17 17V5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5V8C21 8.55228 20.5523 9 20 9H19C18.4477 9 18 9.44772 18 10C18 10.5523 18.4477 11 19 11H20C21.6569 11 23 9.65685 23 8V5C23 2.79086 21.2091 1 19 1H7ZM12 7H6V10H12V7ZM6 11H12V12H6V11ZM12 15H6V17H12V15Z'
                fill={color}
            />
        </svg>
    );
};

export default TransactionBoldMdSVG;
