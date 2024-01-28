import React from 'react';

const VanOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19.8293 17H20C21.6569 17 23 15.6569 23 14V12.4031C23 11.2678 22.6136 10.1662 21.9043 9.27965L19.9818 6.87652C19.033 5.69045 17.5964 5 16.0775 5H5C2.79086 5 1 6.79086 1 9V14C1 15.6569 2.34315 17 4 17H4.17071C4.58254 18.1652 5.69378 19 7 19C8.30622 19 9.41746 18.1652 9.82929 17H14.1707C14.5825 18.1652 15.6938 19 17 19C18.3062 19 19.4175 18.1652 19.8293 17ZM5 7C3.89543 7 3 7.89543 3 9V10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H3V14C3 14.5523 3.44772 15 4 15H4.17071C4.58254 13.8348 5.69378 13 7 13C8.30622 13 9.41746 13.8348 9.82929 15H14.1707C14.5825 13.8348 15.6938 13 17 13C18.3062 13 19.4175 13.8348 19.8293 15H20C20.5523 15 21 14.5523 21 14V12.4031C21 11.7219 20.7682 11.061 20.3426 10.529L18.4201 8.12591C17.8508 7.41427 16.9889 7 16.0775 7H15V9C15 9.55228 15.4477 10 16 10H18C18.5523 10 19 10.4477 19 11C19 11.5523 18.5523 12 18 12H16C14.3431 12 13 10.6569 13 9V7H5ZM7 17C7.55228 17 8 16.5523 8 16C8 15.4477 7.55228 15 7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17ZM17 17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15C16.4477 15 16 15.4477 16 16C16 16.5523 16.4477 17 17 17Z'
                fill={color}
            />
        </svg>
    );
};

export default VanOutlineMdSVG;
