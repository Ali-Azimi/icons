import React from 'react';

const IdNumberBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M10 2C10 1.44772 10.4477 1 11 1H13C13.5523 1 14 1.44772 14 2V5.58579C14 5.851 13.8946 6.10536 13.7071 6.29289L12.7071 7.29289C12.3166 7.68342 11.6834 7.68342 11.2929 7.29289L10.2929 6.29289C10.1054 6.10536 10 5.851 10 5.58579V2Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.4142 7.41421C15.7893 7.03914 16 6.53043 16 6C16 5.44772 16.4477 5 17 5H21C22.1046 5 23 5.89543 23 7V16C23 19.3137 20.3137 22 17 22H7C3.68629 22 1 19.3137 1 16V7C1 5.89543 1.89543 5 3 5H7C7.55228 5 8 5.44772 8 6C8 6.53043 8.21071 7.03914 8.58579 7.41421L9.87868 8.70711C11.0503 9.87868 12.9497 9.87868 14.1213 8.70711L15.4142 7.41421ZM6 14C6 13.4477 6.44772 13 7 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H7C6.44772 15 6 14.5523 6 14ZM10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H10Z'
                fill={color}
            />
        </svg>
    );
};

export default IdNumberBoldMdSVG;