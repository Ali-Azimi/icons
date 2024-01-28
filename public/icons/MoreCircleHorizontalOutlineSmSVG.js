import React from 'react';

const MoreCircleHorizontalOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M8 9C8.55228 9 9 8.55229 9 8C9 7.44772 8.55228 7 8 7C7.44771 7 7 7.44772 7 8C7 8.55229 7.44771 9 8 9Z' fill={color} />
            <path d='M6 8C6 8.55229 5.55229 9 5 9C4.44771 9 4 8.55229 4 8C4 7.44772 4.44771 7 5 7C5.55229 7 6 7.44772 6 8Z' fill={color} />
            <path d='M11 9C11.5523 9 12 8.55229 12 8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8C10 8.55229 10.4477 9 11 9Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z'
                fill={color}
            />
        </svg>
    );
};

export default MoreCircleHorizontalOutlineSmSVG;
