import React from 'react';

const FemaleOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7C10.3431 7 9 5.65685 9 4ZM12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11 20H8.01772C7.42236 20 6.95414 19.5 7.00359 18.917L7.59135 11.9862C7.78242 9.73306 9.69916 8 12 8C14.3008 8 16.2176 9.73306 16.4087 11.9862L16.9964 18.917C17.0459 19.5 16.5776 20 15.9823 20H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20ZM14.4158 12.1552L14.9115 18H9.08853L9.58419 12.1552C9.68503 10.9661 10.7092 10 12 10C13.2908 10 14.315 10.9661 14.4158 12.1552Z'
                fill={color}
            />
        </svg>
    );
};

export default FemaleOutlineMdSVG;
