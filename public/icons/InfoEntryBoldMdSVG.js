import React from 'react';

const InfoEntryBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4V20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22H10C10.5523 22 11 21.5523 11 21C11 20.4477 10.5523 20 10 20V19H21C22.1046 19 23 18.1046 23 17V7C23 5.89543 22.1046 5 21 5H10V4C10.5523 4 11 3.55228 11 3C11 2.44772 10.5523 2 10 2H8ZM10 11H17.88C18.4323 11 18.88 10.5523 18.88 10C18.88 9.44772 18.4323 9 17.88 9H10V11ZM14 14C14 13.4477 14.4477 13 15 13H18C18.5523 13 19 13.4477 19 14C19 14.5523 18.5523 15 18 15H15C14.4477 15 14 14.5523 14 14Z'
                fill={color}
            />
            <path d='M1 7C1 5.89543 1.89543 5 3 5H6V7H3V17H6V19H3C1.89543 19 1 18.1046 1 17V7Z' fill={color} />
        </svg>
    );
};

export default InfoEntryBoldMdSVG;
