import React from 'react';

const HouseholderBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3Z' fill={color} />
            <path
                d='M5 17C5 15.4393 5.59588 14.0178 6.57254 12.9506C6.80841 12.6928 6.76063 12.27 6.42711 12.1659C6.08167 12.0581 5.71429 12 5.33333 12H4C2.34315 12 1 13.3431 1 15V16C1 17.1046 1.89543 18 3 18H4.5C4.77614 18 5 17.7761 5 17.5V17Z'
                fill={color}
            />
            <path
                d='M23 16C23 17.1046 22.1046 18 21 18H19.5C19.2239 18 19 17.7761 19 17.5V17C19 15.4393 18.4041 14.0178 17.4275 12.9506C17.1916 12.6928 17.2394 12.27 17.5729 12.1659C17.9183 12.0581 18.2857 12 18.6667 12H20C21.6569 12 23 13.3431 23 15V16Z'
                fill={color}
            />
            <path
                d='M20 11C21.1046 11 22 10.1046 22 9C22 7.89543 21.1046 7 20 7C18.8954 7 18 7.89543 18 9C18 10.1046 18.8954 11 20 11Z'
                fill={color}
            />
            <path d='M6 9C6 10.1046 5.10457 11 4 11C2.89543 11 2 10.1046 2 9C2 7.89543 2.89543 7 4 7C5.10457 7 6 7.89543 6 9Z' fill={color} />
            <path
                d='M11 13C8.79086 13 7 14.7909 7 17V18C7 19.1046 7.89543 20 9 20H15C16.1046 20 17 19.1046 17 18V17C17 14.7909 15.2091 13 13 13H11Z'
                fill={color}
            />
        </svg>
    );
};

export default HouseholderBoldMdSVG;