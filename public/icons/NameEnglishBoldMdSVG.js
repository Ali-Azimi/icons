import React from 'react';

const NameEnglishBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 7C1 5.34315 2.34315 4 4 4H18C20.7614 4 23 6.23858 23 9V17C23 18.6569 21.6569 20 20 20H6C3.23858 20 1 17.7614 1 15V7ZM11 17C11 17.5523 11.4477 18 12 18H20C20.5523 18 21 17.5523 21 17C21 15.3431 19.6569 14 18 14H14C12.3431 14 11 15.3431 11 17ZM18.5 10C18.5 8.61929 17.3807 7.5 16 7.5C14.6193 7.5 13.5 8.61929 13.5 10C13.5 11.3807 14.6193 12.5 16 12.5C17.3807 12.5 18.5 11.3807 18.5 10ZM10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H6C5.44772 11 5 10.5523 5 10C5 9.44772 5.44772 9 6 9H10ZM8 14C8 13.4477 7.55228 13 7 13H6C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15H7C7.55228 15 8 14.5523 8 14Z'
                fill={color}
            />
        </svg>
    );
};

export default NameEnglishBoldMdSVG;
