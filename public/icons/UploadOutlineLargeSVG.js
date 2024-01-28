import React from 'react';

const UploadOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.62454 23.4002L7.60012 23.4003C3.95497 23.4003 1 20.4453 1 16.8002C1 13.6336 3.22998 10.9879 6.20519 10.3478C7.43922 6.10259 11.3579 3 16.0012 3C20.6447 3 24.5635 6.10282 25.7974 10.3482C28.7715 10.9892 31.0004 13.6344 31.0004 16.8002C31.0004 20.4453 28.0454 23.4003 24.4003 23.4003L24.3759 23.4002H20.0012V20.4002H24.3759L24.4003 20.4003C26.3886 20.4003 28.0004 18.7885 28.0004 16.8002C28.0004 15.3045 27.0883 14.0218 25.7899 13.4781C25.3723 13.3032 24.9148 13.2047 24.4348 13.2002L24.4003 13.2001L24.3658 13.2002C23.9568 13.2041 23.5642 13.2761 23.1986 13.4055C23.2005 13.3373 23.2015 13.2689 23.2015 13.2002C23.2015 12.2205 23.0058 11.2865 22.6514 10.4351C21.5673 7.83086 18.9981 6 16.0012 6C13.0042 6 10.4348 7.8311 9.35088 10.4356C8.9966 11.2868 8.80099 12.2207 8.80099 13.2002C8.80099 13.2691 8.80196 13.3378 8.80388 13.4062C8.43774 13.2764 8.04435 13.2041 7.63459 13.2002L7.60012 13.2001L7.56564 13.2002C7.08462 13.2048 6.62615 13.3036 6.20784 13.4792C4.91089 14.0236 4 15.3055 4 16.8002C4 18.7885 5.61183 20.4003 7.60012 20.4003L7.62454 20.4002H12.001V23.4002H7.62454Z'
                fill={color}
            />
            <path
                d='M11.9393 17.0607C11.3536 16.4749 11.3536 15.5251 11.9393 14.9393L14.9384 11.9402C15.21 11.6683 15.5853 11.5 16 11.5C16.4145 11.5 16.7898 11.6681 17.0613 11.9399L20.0607 14.9393C20.6464 15.5251 20.6464 16.4749 20.0607 17.0607C19.4749 17.6464 18.5251 17.6464 17.9393 17.0607L17.5 16.6213V28C17.5 28.8284 16.8284 29.5 16 29.5C15.1716 29.5 14.5 28.8284 14.5 28V16.6213L14.0607 17.0607C13.4749 17.6464 12.5251 17.6464 11.9393 17.0607Z'
                fill={color}
            />
        </svg>
    );
};

export default UploadOutlineLargeSVG;