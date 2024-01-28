import React from 'react';

const MobileOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 3.99601V20.004C4 21.7199 5.46582 23 7.13252 23H16.8675C18.5342 23 20 21.7199 20 20.004V3.99601C20 2.28007 18.5342 1 16.8675 1H7.13252C5.46582 1 4 2.28007 4 3.99601ZM7.13252 3C6.4437 3 6 3.50721 6 3.99601V5H18V3.99601C18 3.50721 17.5563 3 16.8675 3H7.13252ZM18 20.004V7H6V20.004C6 20.4928 6.4437 21 7.13252 21H16.8675C17.5563 21 18 20.4928 18 20.004Z'
                fill={color}
            />
        </svg>
    );
};

export default MobileOutlineMdSVG;
