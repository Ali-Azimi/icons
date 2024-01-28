import React from 'react';

const PaymentGatewayTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M21.5 8H2.5C2.22386 8 2 7.77614 2 7.5V6.33852C2 6.13406 2.12448 5.95021 2.3143 5.87428L11.6286 2.14856C11.867 2.05319 12.133 2.05319 12.3714 2.14856L21.6857 5.87428C21.8755 5.95021 22 6.13406 22 6.33852V7.5C22 7.77614 21.7761 8 21.5 8Z'
                fill={color}
                stroke='#040A1F'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M4 11V22H20V11H4Z' fill={color} stroke={color} strokeWidth={2} strokeLinejoin='round' />
            <path d='M2 22H22' stroke='#040A1F' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
            <path d='M3 11H21' stroke='#040A1F' strokeWidth={2} strokeLinecap='square' strokeLinejoin='round' />
            <path d='M12 11V22' stroke='#040A1F' strokeWidth={2} strokeLinecap='square' strokeLinejoin='round' />
        </svg>
    );
};

export default PaymentGatewayTwoToneMdSVG;
