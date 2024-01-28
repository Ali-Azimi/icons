import React from 'react';

const SmsOtpOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 8C8.41421 8 8.75 7.66421 8.75 7.25C8.75 6.83579 8.41421 6.5 8 6.5C7.58579 6.5 7.25 6.83579 7.25 7.25C7.25 7.66421 7.58579 8 8 8Z'
                fill={color}
            />
            <path
                d='M11.75 7.25C11.75 7.66421 11.4142 8 11 8C10.5858 8 10.25 7.66421 10.25 7.25C10.25 6.83579 10.5858 6.5 11 6.5C11.4142 6.5 11.75 6.83579 11.75 7.25Z'
                fill={color}
            />
            <path
                d='M5 8C5.41421 8 5.75 7.66421 5.75 7.25C5.75 6.83579 5.41421 6.5 5 6.5C4.58579 6.5 4.25 6.83579 4.25 7.25C4.25 7.66421 4.58579 8 5 8Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 2.5C2.61929 2.5 1.5 3.61929 1.5 5V9C1.5 10.2095 2.35888 11.2184 3.5 11.45V13C3.5 13.1733 3.58973 13.3342 3.73713 13.4253C3.88454 13.5164 4.06861 13.5247 4.22361 13.4472L8.11803 11.5H12C13.3807 11.5 14.5 10.3807 14.5 9V5C14.5 3.61929 13.3807 2.5 12 2.5H4ZM2.5 5C2.5 4.17157 3.17157 3.5 4 3.5H12C12.8284 3.5 13.5 4.17157 13.5 5V9C13.5 9.82843 12.8284 10.5 12 10.5H8C7.92238 10.5 7.84582 10.5181 7.77639 10.5528L4.5 12.191V11C4.5 10.8674 4.44732 10.7402 4.35355 10.6464C4.25979 10.5527 4.13261 10.5 4 10.5C3.17157 10.5 2.5 9.82843 2.5 9V5Z'
                fill={color}
            />
        </svg>
    );
};

export default SmsOtpOutlineSmSVG;
