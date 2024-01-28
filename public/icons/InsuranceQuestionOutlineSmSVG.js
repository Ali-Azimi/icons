import React from 'react';

const InsuranceQuestionOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 5.5C7.4331 5.5 7 5.94176 7 6.45455C7 6.90466 7.3318 7.2985 7.79778 7.38965C8.13578 7.45576 8.5 7.74859 8.5 8.20909V9C8.5 9.27614 8.27614 9.5 8 9.5C7.72386 9.5 7.5 9.27614 7.5 9V8.34738C6.64664 8.1323 6 7.37536 6 6.45455C6 5.36069 6.91005 4.5 8 4.5C9.08995 4.5 10 5.36069 10 6.45455C10 6.73069 9.77614 6.95455 9.5 6.95455C9.22386 6.95455 9 6.73069 9 6.45455C9 5.94176 8.5669 5.5 8 5.5Z'
                fill={color}
            />
            <path
                d='M8 12C8.41421 12 8.75 11.6642 8.75 11.25C8.75 10.8358 8.41421 10.5 8 10.5C7.58579 10.5 7.25 10.8358 7.25 11.25C7.25 11.6642 7.58579 12 8 12Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.19471 1.91981C7.68606 1.60713 8.31398 1.60713 8.80533 1.91981L13.3053 4.78345C13.7311 5.0544 14.0185 5.53945 13.9764 6.08531C13.8068 8.28904 12.6463 12.2438 8.62594 14.2572C8.23202 14.4545 7.76802 14.4545 7.3741 14.2572C3.3537 12.2438 2.19325 8.28904 2.0236 6.08531C1.98158 5.53945 2.26893 5.0544 2.69471 4.78345L7.19471 1.91981ZM8.26846 2.76347C8.10468 2.65925 7.89537 2.65925 7.73158 2.76347L3.23158 5.62711C3.08046 5.72327 3.01019 5.87263 3.02065 6.00856C3.17593 8.02561 4.23832 11.5685 7.82189 13.3631C7.93397 13.4192 8.06608 13.4192 8.17816 13.3631C11.7617 11.5685 12.8241 8.02561 12.9794 6.00856C12.9899 5.87263 12.9196 5.72327 12.7685 5.62711L8.26846 2.76347Z'
                fill={color}
            />
        </svg>
    );
};

export default InsuranceQuestionOutlineSmSVG;