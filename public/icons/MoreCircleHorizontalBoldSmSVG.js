import React from 'react';

const MoreCircleHorizontalBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM12 8C12 8.55229 11.5523 9 11 9C10.4477 9 10 8.55229 10 8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8ZM8 9C8.55228 9 9 8.55229 9 8C9 7.44772 8.55228 7 8 7C7.44771 7 7 7.44772 7 8C7 8.55229 7.44771 9 8 9ZM5 9C5.55229 9 6 8.55229 6 8C6 7.44772 5.55229 7 5 7C4.44771 7 4 7.44772 4 8C4 8.55229 4.44771 9 5 9Z'
                fill={color}
            />
        </svg>
    );
};

export default MoreCircleHorizontalBoldSmSVG;
