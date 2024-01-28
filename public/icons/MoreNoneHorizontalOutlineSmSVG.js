import React from 'react';

const MoreNoneHorizontalOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3.5 8C3.5 7.44772 3.94772 7 4.5 7C5.05228 7 5.5 7.44772 5.5 8C5.5 8.55229 5.05228 9 4.5 9C3.94772 9 3.5 8.55229 3.5 8Z'
                fill={color}
            />
            <path
                d='M10.5 8C10.5 7.44772 10.9477 7 11.5 7C12.0523 7 12.5 7.44772 12.5 8C12.5 8.55229 12.0523 9 11.5 9C10.9477 9 10.5 8.55229 10.5 8Z'
                fill={color}
            />
            <path d='M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55229 9 9 8.55229 9 8C9 7.44772 8.55229 7 8 7Z' fill={color} />
        </svg>
    );
};

export default MoreNoneHorizontalOutlineSmSVG;
