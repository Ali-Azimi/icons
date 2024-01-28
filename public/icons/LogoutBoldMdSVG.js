import React from 'react';

const LogoutBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6 23C3.79086 23 2 21.2091 2 19V5C2 2.79086 3.79086 1 6 1H12C12.5523 1 13 1.44772 13 2C13 2.55228 12.5523 3 12 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H14C15.1046 21 16 20.1046 16 19V18C16 17.4477 16.4477 17 17 17C17.5523 17 18 17.4477 18 18V19C18 21.2091 16.2091 23 14 23H6Z'
                fill={color}
            />
            <path
                d='M11 14V12H15C16.1046 12 17 11.1046 17 10V7H15C14.6212 7 14.275 6.786 14.1056 6.44721C13.9362 6.10843 13.9727 5.70302 14.2 5.4L17.2 1.4C17.3889 1.14819 17.6852 1 18 1C18.3148 1 18.6112 1.14819 18.8 1.4L21.8 5.4C22.0273 5.70302 22.0638 6.10843 21.8944 6.44721C21.725 6.786 21.3788 7 21 7H19V10C19 12.2091 17.2091 14 15 14H11Z'
                fill={color}
            />
        </svg>
    );
};

export default LogoutBoldMdSVG;