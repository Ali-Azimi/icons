import React from 'react';

const SendMessageTwoToneMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4.91673 10.6178C3.69572 11.1341 3.69573 12.8645 4.91674 13.3809L17.9172 18.8786C18.9061 19.2968 20.0014 18.5709 20.0014 17.4971V6.50159C20.0014 5.42782 18.9061 4.70182 17.9172 5.12005L4.91673 10.6178Z'
                fill='#BDBDBD'
            />
            <path d='M20.001 11H15.001C14.4487 11 14.001 11.4477 14.001 12C14.001 12.5523 14.4487 13 15.001 13H20.001V11Z' fill={color} />
        </svg>
    );
};

export default SendMessageTwoToneMdSVG;
