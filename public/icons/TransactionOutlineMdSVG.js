import React from 'react';

const TransactionOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M12 7H6V10H12V7Z' fill={color} />
            <path d='M6 11H12V12H6V11Z' fill={color} />
            <path d='M12 15H6V17H12V15Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 7C1 3.68629 3.68629 1 7 1H19C21.2091 1 23 2.79086 23 5V8C23 9.65685 21.6569 11 20 11H19C18.4477 11 18 10.5523 18 10C18 9.44772 18.4477 9 19 9H20C20.5523 9 21 8.55228 21 8V5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5V17C17 20.3137 14.3137 23 11 23H2C1.44772 23 1 22.5523 1 22V7ZM7 3H15.5351C15.1948 3.58835 15 4.27143 15 5V17C15 19.2091 13.2091 21 11 21H3V7C3 4.79086 4.79086 3 7 3Z'
                fill={color}
            />
        </svg>
    );
};

export default TransactionOutlineMdSVG;
