import React from 'react';

const SignatureOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.00001 1.5C4.72387 1.5 4.50001 1.72386 4.50001 2C4.50001 3.29487 3.7971 4.42616 2.74964 5.03207C2.59514 5.12145 2.5 5.28639 2.5 5.46488V6C2.5 6.09371 2.52633 6.18553 2.576 6.265L7.57143 14.2577C7.5857 14.2814 7.60188 14.3038 7.61976 14.3247C7.63634 14.3441 7.6543 14.3621 7.67344 14.3786C7.76105 14.4543 7.87518 14.5 8 14.5C8.12547 14.5 8.24014 14.4538 8.32793 14.3775C8.34589 14.3618 8.36281 14.3449 8.37851 14.3267C8.39708 14.3052 8.41386 14.2821 8.4286 14.2576L13.424 6.265C13.4737 6.18553 13.5 6.09371 13.5 6V5.46487C13.5 5.28639 13.4049 5.12144 13.2504 5.03207C12.2029 4.42615 11.5 3.29487 11.5 2C11.5 1.72386 11.2761 1.5 11 1.5H5.00001ZM8.5 12.2566L12.5 5.8566V5.74215C11.4254 5.02288 10.677 3.8519 10.5275 2.5H5.47254C5.32306 3.85191 4.57461 5.02289 3.5 5.74216V5.8566L7.5 12.2566V8.41465C6.9174 8.20873 6.5 7.65311 6.5 7C6.5 6.17157 7.17157 5.5 8 5.5C8.82843 5.5 9.5 6.17157 9.5 7C9.5 7.65311 9.0826 8.20873 8.5 8.41465V12.2566Z'
                fill={color}
            />
        </svg>
    );
};

export default SignatureOutlineSmSVG;