import React from 'react';

const MicrophoneOnBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 1.25C6.75736 1.25 5.75 2.25736 5.75 3.5V6.5C5.75 7.74264 6.75736 8.75 8 8.75C9.24264 8.75 10.25 7.74264 10.25 6.5V3.5C10.25 2.25736 9.24264 1.25 8 1.25Z'
                fill={color}
            />
            <path
                d='M3.5 5.25C3.91421 5.25 4.25 5.58579 4.25 6V7C4.25 8.71432 5.84345 10.25 8 10.25C10.1566 10.25 11.75 8.71432 11.75 7V6C11.75 5.58579 12.0858 5.25 12.5 5.25C12.9142 5.25 13.25 5.58579 13.25 6V7C13.25 9.4603 11.2332 11.3759 8.75 11.7012V14C8.75 14.4142 8.41421 14.75 8 14.75C7.58579 14.75 7.25 14.4142 7.25 14V11.7012C4.76676 11.3759 2.75 9.4603 2.75 7V6C2.75 5.58579 3.08579 5.25 3.5 5.25Z'
                fill={color}
            />
        </svg>
    );
};

export default MicrophoneOnBoldSmSVG;