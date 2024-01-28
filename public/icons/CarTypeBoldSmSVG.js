import React from 'react';

const CarTypeBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3.25 3C3.25 2.0335 4.0335 1.25 5 1.25H11C11.9665 1.25 12.75 2.0335 12.75 3C12.75 3.13807 12.6381 3.25 12.5 3.25L3.5 3.25C3.36193 3.25 3.25 3.13807 3.25 3Z'
                fill={color}
            />
            <path
                d='M8.75 5.05C8.75 4.88432 8.88431 4.75 9.05 4.75L12.45 4.75C12.6157 4.75 12.75 4.88432 12.75 5.05V8.95C12.75 9.11569 12.6157 9.25 12.45 9.25H9.05C8.88431 9.25 8.75 9.11569 8.75 8.95L8.75 5.05Z'
                fill={color}
            />
            <path
                d='M6.95 9.25C7.11568 9.25 7.25 9.11569 7.25 8.95L7.25 5.05C7.25 4.88432 7.11569 4.75 6.95 4.75L3.55 4.75C3.38431 4.75 3.25 4.88432 3.25 5.05V8.95C3.25 9.11569 3.38431 9.25 3.55 9.25H6.95Z'
                fill={color}
            />
            <path
                d='M12.5 10.75C12.6381 10.75 12.75 10.8619 12.75 11C12.75 11.8816 12.0981 12.611 11.25 12.7323V14C11.25 14.4142 10.9142 14.75 10.5 14.75C10.0858 14.75 9.75 14.4142 9.75 14V12.75H6.25V14C6.25 14.4142 5.91421 14.75 5.5 14.75C5.08579 14.75 4.75 14.4142 4.75 14V12.7323C3.90193 12.611 3.25 11.8816 3.25 11C3.25 10.8619 3.36193 10.75 3.5 10.75L12.5 10.75Z'
                fill={color}
            />
        </svg>
    );
};

export default CarTypeBoldSmSVG;
