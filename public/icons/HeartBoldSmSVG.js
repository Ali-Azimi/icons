import React from 'react';

const HeartBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.06279 3.13682C5.62707 1.85407 3.42938 1.97761 2.14505 3.41198C0.95165 4.74479 0.951652 6.76675 2.14505 8.09956L6.68151 13.166C7.37876 13.9447 8.62124 13.9447 9.31849 13.166L13.855 8.09956C15.0484 6.76675 15.0484 4.74479 13.855 3.41198C12.5706 1.97761 10.3729 1.85407 8.93721 3.13682L8 3.97418L7.06279 3.13682Z'
                fill={color}
            />
        </svg>
    );
};

export default HeartBoldSmSVG;
