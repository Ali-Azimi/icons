import React from 'react';

const VisitDoneOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.13252 3C6.4437 3 6 3.50721 6 3.99601V5H9.83104C11.1059 5 12.2415 5.80569 12.6626 7.00895L14.3376 11.7945C14.7562 12.4268 15 13.1849 15 14V15C15 16.1046 14.1046 17 13 17H12V18C12 18.5523 11.5523 19 11 19C10.4477 19 10 18.5523 10 18V17H6V20.004C6 20.4928 6.4437 21 7.13252 21H16.8675C17.5563 21 18 20.4928 18 20.004V15C18 14.4477 18.4477 14 19 14C19.5523 14 20 14.4477 20 15V20.004C20 21.7199 18.5342 23 16.8675 23H7.13252C5.46582 23 4 21.7199 4 20.004V3.99601C4 2.28007 5.46582 1 7.13252 1H16.8675C18.5342 1 20 2.28007 20 3.99601C20 4.54829 19.5523 4.99601 19 4.99601C18.4477 4.99601 18 4.54829 18 3.99601C18 3.50721 17.5563 3 16.8675 3H7.13252ZM6 10V7H9.83104C10.256 7 10.6345 7.26856 10.7749 7.66965L11.5905 10H6ZM6 15V12H11C12.1046 12 13 12.8954 13 14V15H6Z'
                fill={color}
            />
            <path
                d='M22.7775 7.6289C23.1248 7.1995 23.0583 6.56984 22.6289 6.22252C22.1995 5.87521 21.5698 5.94176 21.2225 6.37116L18.7315 9.45095L17.7499 8.33841C17.3844 7.92429 16.7525 7.88479 16.3384 8.2502C15.9243 8.6156 15.8848 9.24753 16.2502 9.66166L18.0149 11.6617C18.2097 11.8824 18.4918 12.0061 18.7862 11.9998C19.0805 11.9935 19.3571 11.8578 19.5422 11.6289L22.7775 7.6289Z'
                fill={color}
            />
        </svg>
    );
};

export default VisitDoneOutlineMdSVG;
