import React from 'react';

const BlogOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 2C4 1.44772 4.44772 1 5 1H9.05056C10.1035 1 11.1099 1.4256 11.8492 2.17759C12.35 2.68695 12.7006 3.31772 12.8746 4H22C22.5523 4 23 4.44772 23 5V18C23 18.5523 22.5523 19 22 19H15C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17H21V6H13V17V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V17C11 16.4641 10.7905 15.9536 10.423 15.5797C10.0561 15.2065 9.56206 15 9.05056 15H5C4.44772 15 4 14.5523 4 14V6H3V17H9C9.55228 17 10 17.4477 10 18C10 18.5523 9.55228 19 9 19H2C1.44772 19 1 18.5523 1 18V5C1 4.44772 1.44772 4 2 4H4V2ZM11 13.5212V5C11 4.46414 10.7905 3.95356 10.423 3.57973C10.0561 3.2065 9.56206 3 9.05056 3H6V13H9.05056C9.74116 13 10.4117 13.1831 11 13.5212ZM15 9C14.4477 9 14 9.44771 14 10C14 10.5523 14.4477 11 15 11H18.97C19.5223 11 19.97 10.5523 19.97 10C19.97 9.44771 19.5223 9 18.97 9H15ZM14 14C14 13.4477 14.4477 13 15 13H18.97C19.5223 13 19.97 13.4477 19.97 14C19.97 14.5523 19.5223 15 18.97 15H15C14.4477 15 14 14.5523 14 14Z'
                fill={color}
            />
        </svg>
    );
};

export default BlogOutlineMdSVG;
