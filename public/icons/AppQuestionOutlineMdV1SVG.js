import React from 'react';

const AppQuestionOutlineMdV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11C13 11.5523 13.4477 12 14 12C14.5523 12 15 11.5523 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.137 9.63289 13.1247 10.5608 13.6327C10.735 13.7281 10.8664 13.8316 10.9431 13.9211C10.9829 13.9676 10.9962 13.9953 11 14.0061V14.5C11 15.0523 11.4477 15.5 12 15.5C12.5523 15.5 13 15.0523 13 14.5V14C13 13.4196 12.7472 12.9526 12.4613 12.6191C12.1796 12.2907 11.8315 12.0482 11.5212 11.8784C11.2085 11.7072 11 11.3772 11 11Z'
                fill={color}
            />
            <path
                d='M12 18.4C12.5523 18.4 13 17.9523 13 17.4C13 16.8477 12.5523 16.4 12 16.4C11.4477 16.4 11 16.8477 11 17.4C11 17.9523 11.4477 18.4 12 18.4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.13252 1C5.46582 1 4 2.28007 4 3.99601V20.004C4 21.7199 5.46582 23 7.13252 23H16.8675C18.5342 23 20 21.7199 20 20.004V3.99601C20 2.28007 18.5342 1 16.8675 1H7.13252ZM6 3.99601C6 3.50721 6.4437 3 7.13252 3H9L9.72361 4.44721C9.893 4.786 10.2393 5 10.618 5H13.382C13.7607 5 14.107 4.786 14.2764 4.44721L15 3H16.8675C17.5563 3 18 3.50721 18 3.99601V20.004C18 20.4928 17.5563 21 16.8675 21H7.13252C6.4437 21 6 20.4928 6 20.004V3.99601Z'
                fill={color}
            />
        </svg>
    );
};

export default AppQuestionOutlineMdV1SVG;