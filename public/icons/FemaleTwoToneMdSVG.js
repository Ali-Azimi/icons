import React from 'react';

const FemaleTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C10.3431 1 9 2.34315 9 4C9 5.65685 10.3431 7 12 7C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1ZM11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4Z'
                fill='#040A1F'
            />
            <path d='M13 22V20H11V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22Z' fill='#040A1F' />
            <path
                d='M12 8C9.69916 8 7.78242 9.73307 7.59135 11.9862L7.00359 18.917C6.95414 19.5 7.42236 20 8.01772 20H15.9823C16.5776 20 17.0459 19.5 16.9964 18.917L16.4087 11.9862C16.2176 9.73306 14.3008 8 12 8Z'
                fill={color}
            />
        </svg>
    );
};

export default FemaleTwoToneMdSVG;
