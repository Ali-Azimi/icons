import React from 'react';

const MobileBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.82788 1C6.18507 1 5 2.42601 5 3.99601V4.5C5 4.77614 5.22386 5 5.5 5H18.5C18.7761 5 19 4.77614 19 4.5V3.99601C19 2.42601 17.8149 1 16.1721 1H7.82788Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 20.004V7.5C5 7.22386 5.22386 7 5.5 7H18.5C18.7761 7 19 7.22386 19 7.5V20.004C19 21.574 17.8149 23 16.1721 23H7.82788C6.18507 23 5 21.574 5 20.004ZM12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z'
                fill={color}
            />
        </svg>
    );
};

export default MobileBoldMdSVG;
