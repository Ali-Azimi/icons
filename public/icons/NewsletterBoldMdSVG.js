import React from 'react';

const NewsletterBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M15 9C15 9.55229 14.5523 10 14 10H10C9.44772 10 9 9.55228 9 9C9 8.44771 9.44772 8 10 8L14 8C14.5523 8 15 8.44772 15 9Z'
                fill={color}
            />
            <path
                d='M14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5L12 5C11.4477 5 11 5.44771 11 6C11 6.55228 11.4477 7 12 7L14 7Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 1C4.89543 1 4 1.89543 4 3V10H3C1.89543 10 1 10.8954 1 12V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V12C23 10.8954 22.1046 10 21 10H20V3C20 1.89543 19.1046 1 18 1H6ZM6 3H18V10.4792L12.0775 14.6228C12.0507 14.6416 12.0248 14.6616 12 14.6829C11.9752 14.6616 11.9493 14.6416 11.9225 14.6228L6 10.4792V3Z'
                fill={color}
            />
        </svg>
    );
};

export default NewsletterBoldMdSVG;
