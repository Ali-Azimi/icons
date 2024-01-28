import React from 'react';

const FemaleBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7C10.3431 7 9 5.65685 9 4Z' fill={color} />
            <path
                d='M7.00359 18.917C6.95414 19.5 7.42236 20 8.01772 20H11V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V20H15.9823C16.5776 20 17.0459 19.5 16.9964 18.917L16.4087 11.9862C16.2176 9.73306 14.3008 8 12 8C9.69916 8 7.78242 9.73306 7.59135 11.9862L7.00359 18.917Z'
                fill={color}
            />
        </svg>
    );
};

export default FemaleBoldMdSVG;
