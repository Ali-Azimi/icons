import React from 'react';

const MicrophoneOnOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 3.5C6 2.39543 6.89543 1.5 8 1.5C9.10457 1.5 10 2.39543 10 3.5V6.5C10 7.60457 9.10457 8.5 8 8.5C6.89543 8.5 6 7.60457 6 6.5V3.5ZM8 2.5C7.44772 2.5 7 2.94772 7 3.5V6.5C7 7.05228 7.44772 7.5 8 7.5C8.55228 7.5 9 7.05228 9 6.5V3.5C9 2.94772 8.55228 2.5 8 2.5Z'
                fill={color}
            />
            <path
                d='M4 5.5C4.27614 5.5 4.5 5.72386 4.5 6V7C4.5 8.933 6.067 10.5 8 10.5C9.933 10.5 11.5 8.933 11.5 7V6C11.5 5.72386 11.7239 5.5 12 5.5C12.2761 5.5 12.5 5.72386 12.5 6V7C12.5 9.31628 10.75 11.2238 8.5 11.4725V14C8.5 14.2761 8.27614 14.5 8 14.5C7.72386 14.5 7.5 14.2761 7.5 14V11.4725C5.25002 11.2238 3.5 9.31628 3.5 7V6C3.5 5.72386 3.72386 5.5 4 5.5Z'
                fill={color}
            />
        </svg>
    );
};

export default MicrophoneOnOutlineSmSVG;
