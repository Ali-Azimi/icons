import React from 'react';

const ChequeBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 2H5.5C5.77614 2 6 2.22386 6 2.5V14.5C6 14.7761 5.77614 15 5.5 15H3.5C2.90861 15 2.34386 15.1141 1.82657 15.3214C1.45549 15.4702 1 15.2212 1 14.8214V6C1 3.79086 2.79086 2 5 2Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M22 15C22.5523 15 23 14.5523 23 14V6C23 3.79086 21.2091 2 19 2H8.5C8.22386 2 8 2.22386 8 2.5V14.5C8 14.7761 8.22386 15 8.5 15H22ZM10 6C10 5.44772 10.4477 5 11 5H17.5C18.0523 5 18.5 5.44772 18.5 6C18.5 6.55228 18.0523 7 17.5 7H11C10.4477 7 10 6.55228 10 6ZM13.5 11C13.5 10.4477 13.9477 10 14.5 10H17.5C18.0523 10 18.5 10.4477 18.5 11C18.5 11.5523 18.0523 12 17.5 12H14.5C13.9477 12 13.5 11.5523 13.5 11Z'
                fill={color}
            />
            <path
                d='M1 19.5C1 18.1193 2.11929 17 3.5 17H11.5C11.7761 17 12 17.2239 12 17.5V21.5C12 21.7761 11.7761 22 11.5 22H3.5C2.11929 22 1 20.8807 1 19.5Z'
                fill={color}
            />
        </svg>
    );
};

export default ChequeBoldMdSVG;
