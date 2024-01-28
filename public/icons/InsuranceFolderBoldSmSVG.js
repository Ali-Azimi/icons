import React from 'react';

const InsuranceFolderBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3 1.25C2.0335 1.25 1.25 2.0335 1.25 3V11C1.25 11.9665 2.0335 12.75 3 12.75H6.70858C6.84756 12.75 6.94431 12.6116 6.90141 12.4794C6.58598 11.5073 6.5 10.5931 6.5 10C6.5 9.49847 6.75065 9.03012 7.16795 8.75192L10.1679 6.75192C10.6718 6.41603 11.3282 6.41603 11.8321 6.75192L14.4391 8.48993C14.572 8.57854 14.75 8.48326 14.75 8.32352V5C14.75 4.0335 13.9665 3.25 13 3.25H10.9293C10.8608 3.25 10.7953 3.22187 10.7481 3.17219L9.43944 1.79469C9.10905 1.44691 8.65038 1.25 8.17069 1.25H3Z'
                fill={color}
            />
            <path
                d='M13.4007 12.7039C12.9584 13.6334 12.2156 14.5137 11 15C9.80446 14.5218 9.06631 13.6624 8.62148 12.75C8.16035 11.8041 8.01445 10.8012 8.00104 10.1068C7.99975 10.0399 8.03342 9.97772 8.08906 9.94063L10.8891 8.07396C10.9562 8.02917 11.0438 8.02917 11.1109 8.07396L13.9109 9.94063C13.9666 9.97772 14.0002 10.0399 13.999 10.1068C13.9858 10.7899 13.8444 11.7716 13.4007 12.7039Z'
                fill={color}
            />
        </svg>
    );
};

export default InsuranceFolderBoldSmSVG;