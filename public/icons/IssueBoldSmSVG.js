import React from 'react';

const IssueBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.83019 3.05728C7.23662 1.98091 8.76339 1.98091 9.16982 3.05728L12.9697 13.1206C12.999 13.1985 13.0736 13.25 13.1568 13.25H14C14.4142 13.25 14.75 13.5858 14.75 14C14.75 14.4142 14.4142 14.75 14 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H2.84325C2.92645 13.25 3.00096 13.1985 3.03035 13.1206L6.83019 3.05728Z'
                fill={color}
            />
        </svg>
    );
};

export default IssueBoldSmSVG;
