import React from 'react';

const MoreNoneVerticalOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.5 7C10.6716 7 10 6.32843 10 5.5C10 4.67157 10.6716 4 11.5 4C12.3284 4 13 4.67157 13 5.5C13 6.32843 12.3284 7 11.5 7Z'
                fill={color}
            />
            <path
                d='M11.5 19C10.6716 19 10 18.3284 10 17.5C10 16.6716 10.6716 16 11.5 16C12.3284 16 13 16.6716 13 17.5C13 18.3284 12.3284 19 11.5 19Z'
                fill={color}
            />
            <path
                d='M11.5 13C10.6716 13 10 12.3284 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5C13 12.3284 12.3284 13 11.5 13Z'
                fill={color}
            />
        </svg>
    );
};

export default MoreNoneVerticalOutlineMdSVG;
