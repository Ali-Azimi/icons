import React from 'react';

const TravelDurationBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14 3C14 1.89543 14.8954 1 16 1H18C19.1046 1 20 1.89543 20 3V5C21.6569 5 23 6.34315 23 8V18C23 19.3062 22.1652 20.4175 21 20.8293V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V21H16V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V21.1349C14 20.9651 14.0444 20.7987 14.1219 20.6477C14.6832 19.5539 15 18.3139 15 17C15 14.2453 13.6077 11.8158 11.4885 10.3768C11.1932 10.1763 11 9.85043 11 9.49347V8C11 6.34315 12.3431 5 14 5V3ZM18 3V5H16V3H18Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 17C13 20.3137 10.3137 23 7 23C3.68629 23 1 20.3137 1 17C1 13.6863 3.68629 11 7 11C10.3137 11 13 13.6863 13 17ZM8 14V16.5858L9.41421 18L8 19.4142L6.58579 18C6.21071 17.6249 6 17.1162 6 16.5858V14H8Z'
                fill={color}
            />
        </svg>
    );
};

export default TravelDurationBoldMdSVG;
