import React from 'react';

const MicrophoneOffOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.3536 2.35355C14.5488 2.15829 14.5488 1.84171 14.3536 1.64645C14.1583 1.45118 13.8417 1.45118 13.6464 1.64645L10 5.29289V3.5C10 2.39543 9.10457 1.5 8 1.5C6.89543 1.5 6 2.39543 6 3.5V6.5C6 7.25613 6.4196 7.91426 7.03866 8.25423L5.67588 9.61701C4.95449 8.97589 4.5 8.04102 4.5 7V6C4.5 5.72386 4.27614 5.5 4 5.5C3.72386 5.5 3.5 5.72386 3.5 6V7C3.5 8.31715 4.06589 9.50213 4.96782 10.3251L1.64645 13.6464C1.45118 13.8417 1.45118 14.1583 1.64645 14.3536C1.84171 14.5488 2.15829 14.5488 2.35355 14.3536L14.3536 2.35355ZM7.81077 7.48212L9 6.29289V3.5C9 2.94772 8.55228 2.5 8 2.5C7.44772 2.5 7 2.94772 7 3.5V6.5C7 6.98759 7.34897 7.39367 7.81077 7.48212Z'
                fill={color}
            />
            <path
                d='M11.5 7C11.5 6.94507 11.5218 6.89239 11.5607 6.85355L12.4373 5.97695C12.4608 5.95343 12.5 5.96673 12.5 6V7C12.5 9.31628 10.75 11.2238 8.5 11.4725V14C8.5 14.2761 8.27614 14.5 8 14.5C7.72386 14.5 7.5 14.2761 7.5 14V11.4166C7.5 11.0949 7.62779 10.7864 7.85526 10.5589C7.89355 10.5207 7.94585 10.5 8 10.5C9.933 10.5 11.5 8.933 11.5 7Z'
                fill={color}
            />
        </svg>
    );
};

export default MicrophoneOffOutlineSmSVG;