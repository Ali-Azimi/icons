import React from 'react';

const FilterBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 3C6.89543 3 6 3.89543 6 5V7C6 8.10457 6.89543 9 8 9H12C13.1046 9 14 8.10457 14 7V5C14 3.89543 13.1046 3 12 3H8Z'
                fill={color}
            />
            <path d='M2 5H4V7H2C1.44772 7 1 6.55228 1 6C1 5.44772 1.44772 5 2 5Z' fill={color} />
            <path d='M22 7H16V5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7Z' fill={color} />
            <path
                d='M11 15C9.89543 15 9 15.8954 9 17V19C9 20.1046 9.89543 21 11 21H15C16.1046 21 17 20.1046 17 19V17C17 15.8954 16.1046 15 15 15H11Z'
                fill={color}
            />
            <path d='M2 17H7V19H2C1.44772 19 1 18.5523 1 18C1 17.4477 1.44772 17 2 17Z' fill={color} />
            <path d='M22 19H19V17H22C22.5523 17 23 17.4477 23 18C23 18.5523 22.5523 19 22 19Z' fill={color} />
        </svg>
    );
};

export default FilterBoldMdSVG;
