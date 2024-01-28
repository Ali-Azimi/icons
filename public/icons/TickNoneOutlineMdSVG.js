import React from 'react';

const TickNoneOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.6524 7.24218C18.071 7.60251 18.1182 8.23392 17.7578 8.65246L12.0315 15.3038C11.2527 16.2084 9.83168 16.2337 9.01744 15.3667L6.27108 12.4425C5.89299 12.04 5.91283 11.4071 6.31541 11.029C6.71798 10.6509 7.35083 10.6708 7.72892 11.0733L10.474 13.9962L10.475 13.9966C10.4788 13.9981 10.4868 14.0002 10.4975 14C10.5076 13.9998 10.5148 13.9976 10.5182 13.9962L16.2422 7.34757C16.6025 6.92903 17.2339 6.88184 17.6524 7.24218Z'
                fill={color}
            />
        </svg>
    );
};

export default TickNoneOutlineMdSVG;
