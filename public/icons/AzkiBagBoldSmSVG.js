import React from 'react';

const AzkiBagBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3 1.25C2.58579 1.25 2.25 1.58579 2.25 2V14C2.25 14.4142 2.58579 14.75 3 14.75H10C11.5188 14.75 12.75 13.5188 12.75 12V11.2C12.75 11.0895 12.6605 11 12.55 11H10C8.61929 11 7.5 9.88071 7.5 8.5V7.5C7.5 6.11929 8.61929 5 10 5H12.55C12.6605 5 12.75 4.91046 12.75 4.8V4C12.75 2.48122 11.5188 1.25 10 1.25H3Z'
                fill={color}
            />
            <path
                d='M10 9.5C9.44772 9.5 9 9.05228 9 8.5V7.5C9 6.94772 9.44772 6.5 10 6.5H13C13.5523 6.5 14 6.94772 14 7.5V8.5C14 9.05228 13.5523 9.5 13 9.5H10Z'
                fill={color}
            />
        </svg>
    );
};

export default AzkiBagBoldSmSVG;
