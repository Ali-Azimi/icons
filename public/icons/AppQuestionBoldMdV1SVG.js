import React from 'react';

const AppQuestionBoldMdV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.82788 1C6.18507 1 5 2.42601 5 3.99601V20.004C5 21.574 6.18507 23 7.82788 23H16.1721C17.8149 23 19 21.574 19 20.004V3.99601C19 2.42601 17.8149 1 16.1721 1H15L14.2764 2.44721C14.107 2.786 13.7607 3 13.382 3H10.618C10.2393 3 9.893 2.786 9.72361 2.44721L9 1H7.82788ZM12 10C11.4477 10 11 10.4477 11 11C11 11.3772 11.2085 11.7072 11.5212 11.8784C11.8315 12.0482 12.1796 12.2907 12.4613 12.6191C12.7472 12.9526 13 13.4196 13 14V14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5V14.0061C10.9962 13.9953 10.9829 13.9676 10.9431 13.9211C10.8664 13.8316 10.735 13.7281 10.5608 13.6327C9.63289 13.1247 9 12.137 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 11.5523 14.5523 12 14 12C13.4477 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10ZM13 17.4C13 17.9523 12.5523 18.4 12 18.4C11.4477 18.4 11 17.9523 11 17.4C11 16.8477 11.4477 16.4 12 16.4C12.5523 16.4 13 16.8477 13 17.4Z'
                fill={color}
            />
        </svg>
    );
};

export default AppQuestionBoldMdV1SVG;