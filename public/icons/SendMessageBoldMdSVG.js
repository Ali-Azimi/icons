import React from 'react';

const SendMessageBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4.91625 10.6178C3.69523 11.1341 3.69524 12.8645 4.91625 13.3809L17.9167 18.8786C18.9056 19.2968 20.0009 18.5709 20.0009 17.4971V14.2348C20.0009 13.7351 19.632 13.3121 19.137 13.2441L12.9519 12.3947C12.491 12.3314 12.4912 11.6652 12.9521 11.6021L19.1366 10.7552C19.6318 10.6874 20.0009 10.2643 20.0009 9.76448V6.50159C20.0009 5.42782 18.9056 4.70182 17.9167 5.12005L4.91625 10.6178Z'
                fill={color}
            />
        </svg>
    );
};

export default SendMessageBoldMdSVG;
