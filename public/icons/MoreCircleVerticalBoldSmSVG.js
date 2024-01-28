import React from 'react';

const MoreCircleVerticalBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7 5C7 5.55228 7.44771 6 8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44771 4 7 4.44772 7 5ZM7 8C7 8.55228 7.44771 9 8 9C8.55228 9 9 8.55229 9 8C9 7.44772 8.55228 7 8 7C7.44771 7 7 7.44772 7 8ZM8 12C7.44771 12 7 11.5523 7 11C7 10.4477 7.44771 10 8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12Z'
                fill={color}
            />
        </svg>
    );
};

export default MoreCircleVerticalBoldSmSVG;
