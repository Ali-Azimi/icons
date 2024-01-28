import React from 'react';

const CarInfoBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C5.34315 1 4 2.34315 4 4V8.34353C4 9.04792 4.72348 9.5381 5.4271 9.505C5.49776 9.50168 5.56877 9.5 5.6401 9.5H9.3599C11.376 9.5 13.146 10.8409 13.6918 12.7816L14.4066 15.3231C14.4278 15.3985 14.4453 15.4743 14.4593 15.5505C14.4923 15.731 14.552 15.9067 14.6501 16.0616C15.1884 16.9117 15.5 17.9194 15.5 19C15.5 19.5606 15.3682 20.0905 15.1339 20.5602C15.0527 20.723 15 20.8999 15 21.0818V22C15 22.5523 15.4547 23.0128 15.9899 22.8766C17.7202 22.4361 19 20.8675 19 19V10H20C21.6569 10 23 8.65685 23 7V4C23 2.34315 21.6569 1 20 1H7ZM20 8H19V4C19 3.44772 19.4477 3 20 3C20.5523 3 21 3.44772 21 4V7C21 7.55228 20.5523 8 20 8ZM8 5C8 4.44772 8.44772 4 9 4H14C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6H9C8.44772 6 8 5.55228 8 5ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H12Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.75212 13.1878C3.11602 11.8939 4.29604 11 5.64008 11H9.35988C10.7039 11 11.8839 11.8939 12.2478 13.1878L13.2119 16.6155C13.707 17.2814 14 18.1065 14 19C14 20.1046 13.1046 21 12 21V22C12 22.5523 11.5523 23 11 23C10.4477 23 10 22.5523 10 22V21H5V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22L3 21C1.89543 21 1 20.1046 1 19C1 18.1065 1.29295 17.2814 1.78804 16.6156L2.75212 13.1878ZM10.6799 15H4.32003L4.67742 13.7293C4.79872 13.298 5.19206 13 5.64008 13H9.35988C9.8079 13 10.2012 13.298 10.3225 13.7293L10.6799 15Z'
                fill={color}
            />
        </svg>
    );
};

export default CarInfoBoldMdSVG;