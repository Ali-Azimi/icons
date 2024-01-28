import React from 'react';

const StateBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 3.45C12 3.33954 12.0895 3.25 12.2 3.25H12.5C13.4665 3.25 14.25 4.0335 14.25 5V12C14.25 13.5188 13.0188 14.75 11.5 14.75H4.5C2.98122 14.75 1.75 13.5188 1.75 12V5C1.75 4.0335 2.5335 3.25 3.5 3.25H3.8C3.91046 3.25 4 3.33954 4 3.45V5C4 5.82843 4.67157 6.5 5.5 6.5H10.5C11.3284 6.5 12 5.82843 12 5V3.45Z'
                fill={color}
            />
            <path
                d='M5.5 3.04721C5.5 3.01616 5.50723 2.98554 5.52111 2.95777L6.44472 1.11056C6.4786 1.0428 6.54785 1 6.62361 1H9.37639C9.45215 1 9.5214 1.0428 9.55528 1.11056L10.4789 2.95777C10.4928 2.98554 10.5 3.01616 10.5 3.04721V4.8C10.5 4.91046 10.4105 5 10.3 5H5.7C5.58954 5 5.5 4.91046 5.5 4.8V3.04721Z'
                fill={color}
            />
        </svg>
    );
};

export default StateBoldSmSVG;
