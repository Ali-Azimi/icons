import React from 'react';

const KeyBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11 4.5C9.60311 4.5 8.39839 5.31815 7.83696 6.5H2.1C1.76863 6.5 1.5 6.76863 1.5 7.1V8.9C1.5 9.23137 1.76863 9.5 2.1 9.5H3.5V10.3256C3.5 10.5906 3.6738 10.8242 3.92759 10.9003L5.72759 11.4403C6.11256 11.5558 6.5 11.2675 6.5 10.8656V9.5H7.83696C8.39839 10.6818 9.60311 11.5 11 11.5C12.933 11.5 14.5 9.933 14.5 8C14.5 6.067 12.933 4.5 11 4.5Z'
                fill={color}
            />
        </svg>
    );
};

export default KeyBoldSmSVG;
