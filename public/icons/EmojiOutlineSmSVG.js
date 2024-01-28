import React from 'react';

const EmojiOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4.5 6.5C4.5 5.94772 4.94771 5.5 5.5 5.5C6.05228 5.5 6.5 5.94772 6.5 6.5C6.5 7.05228 6.05228 7.5 5.5 7.5C4.94771 7.5 4.5 7.05228 4.5 6.5Z'
                fill={color}
            />
            <path
                d='M9.5 6.5C9.5 5.94772 9.94772 5.5 10.5 5.5C11.0523 5.5 11.5 5.94772 11.5 6.5C11.5 7.05228 11.0523 7.5 10.5 7.5C9.94772 7.5 9.5 7.05228 9.5 6.5Z'
                fill={color}
            />
            <path
                d='M6.09961 9.20001C6.09961 8.92387 5.87575 8.70001 5.59961 8.70001C5.32347 8.70001 5.09961 8.92387 5.09961 9.20001C5.09961 10.8016 6.39798 12.1 7.99961 12.1C9.60124 12.1 10.8996 10.8016 10.8996 9.20001C10.8996 8.92387 10.6758 8.70001 10.3996 8.70001C10.1235 8.70001 9.89961 8.92387 9.89961 9.20001C9.89961 10.2494 9.04895 11.1 7.99961 11.1C6.95027 11.1 6.09961 10.2494 6.09961 9.20001Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8Z'
                fill={color}
            />
        </svg>
    );
};

export default EmojiOutlineSmSVG;
