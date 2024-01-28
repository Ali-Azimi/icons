import React from 'react';

const SendBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M14.6478 3.17743L10.909 13.6506C10.9044 13.6633 10.8995 13.676 10.8943 13.6884C10.3047 15.0943 8.36277 15.086 7.73726 13.7701C7.70435 13.7008 7.69069 13.669 7.68122 13.647C7.67202 13.6255 7.66677 13.6133 7.65159 13.5848L6.30528 11.0561C6.24327 10.9396 6.26465 10.7963 6.35796 10.703L9.54508 7.51593C9.83798 7.22305 9.83798 6.74817 9.5451 6.45527C9.25221 6.16238 8.77733 6.16237 8.48444 6.45526L5.29733 9.64227C5.20402 9.73557 5.06069 9.75695 4.94421 9.69494L2.41534 8.34855C2.38684 8.33337 2.37461 8.32813 2.35315 8.31891C2.3311 8.30945 2.29929 8.29579 2.23004 8.26288C0.914103 7.63737 0.905812 5.6954 2.31169 5.10583C2.32419 5.10059 2.33682 5.09569 2.34958 5.09114L12.8227 1.35238C13.9672 0.892864 15.1073 2.03288 14.6478 3.17743Z'
                fill={color}
            />
        </svg>
    );
};

export default SendBoldSmSVG;
