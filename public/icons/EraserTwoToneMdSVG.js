import React from 'react';

const EraserTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 22C4 21.4477 4.44772 21 5 21H19C19.5523 21 20 21.4477 20 22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22Z'
                fill='#040A1F'
            />
            <path
                d='M15.5108 1.29647C15.323 1.10675 15.0671 1 14.8001 1C14.5332 1 14.2773 1.10675 14.0895 1.29647L1.28933 14.2265C0.903556 14.6162 0.903555 15.2438 1.28933 15.6335L4.32857 18.7036C4.51639 18.8933 4.77227 19.0001 5.03924 19.0001H13.3609C13.6279 19.0001 13.8838 18.8933 14.0716 18.7036L22.7109 9.97665C23.0967 9.58696 23.0967 8.95928 22.7109 8.56959L15.5108 1.29647Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.3999 7.04363L17.007 15.7381L15.6 17.1594L6.99284 8.46497L8.3999 7.04363Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default EraserTwoToneMdSVG;
