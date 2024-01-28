import React from 'react';

const MicrophoneOnTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.9998 1C9.7907 1 7.99984 2.79086 7.99984 5V10C7.99984 12.2091 9.7907 14 11.9998 14C14.209 14 15.9998 12.2091 15.9998 10V5C15.9998 2.79086 14.209 1 11.9998 1Z'
                fill={color}
            />
            <path
                d='M4.06149 10.998C3.99329 10.45 4.44756 10 4.99984 10C5.55213 10 5.99111 10.4511 6.0821 10.9958C6.55645 13.8356 9.02538 16 11.9998 16C14.9743 16 17.4432 13.8356 17.9176 10.9958C18.0086 10.4511 18.4476 10 18.9998 10C19.5521 10 20.0064 10.45 19.9382 10.998C19.4877 14.6177 16.6192 17.4868 12.9998 17.9381V21H14.9998C15.5521 21 15.9998 21.4477 15.9998 22C15.9998 22.5523 15.5521 23 14.9998 23H8.99984C8.44756 23 7.99984 22.5523 7.99984 22C7.99984 21.4477 8.44756 21 8.99984 21H10.9998V17.9381C7.38046 17.4868 4.51193 14.6177 4.06149 10.998Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default MicrophoneOnTwoToneMdSVG;