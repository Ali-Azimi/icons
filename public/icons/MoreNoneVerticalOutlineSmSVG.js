import React from 'react';

const MoreNoneVerticalOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 3.5C8.55229 3.5 9 3.94772 9 4.5C9 5.05228 8.55228 5.5 8 5.5C7.44772 5.5 7 5.05228 7 4.5C7 3.94771 7.44772 3.5 8 3.5Z'
                fill={color}
            />
            <path
                d='M8 10.5C8.55229 10.5 9 10.9477 9 11.5C9 12.0523 8.55228 12.5 8 12.5C7.44772 12.5 7 12.0523 7 11.5C7 10.9477 7.44772 10.5 8 10.5Z'
                fill={color}
            />
            <path d='M9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9C8.55229 9 9 8.55229 9 8Z' fill={color} />
        </svg>
    );
};

export default MoreNoneVerticalOutlineSmSVG;
