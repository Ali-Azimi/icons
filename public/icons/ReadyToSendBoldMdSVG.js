import React from 'react';

const ReadyToSendBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M23 4C23 2.34315 21.6569 1 20 1H17C16.4477 1 16 1.44772 16 2V7.06574C16 7.46509 15.5549 7.70328 15.2227 7.48177L13.2774 6.1849C13.1094 6.07293 12.8906 6.07293 12.7227 6.1849L10.7773 7.48177C10.4451 7.70328 10 7.46509 10 7.06574V2C10 1.44772 9.55228 1 9 1H6C4.34315 1 3 2.34315 3 4V11.3037C3 11.6578 3.40715 11.8572 3.68689 11.6401C4.74755 10.7867 6.25224 10.7866 7.3129 11.64L10.9184 14.439L10.9421 14.4585C11.6888 15.0758 12.1349 16.0795 11.9638 17.1447C11.8871 17.6227 11.7788 18.0813 11.6447 18.5199C11.4292 19.2245 11.9195 20 12.6563 20H20C21.6569 20 23 18.6569 23 17V4Z'
                fill={color}
            />
            <path
                d='M5.13836 22.9048C5.36497 23.0317 5.63503 23.0317 5.86164 22.9048C7.23865 22.1338 9.48175 19.9872 9.98923 16.8276C10.0398 16.5128 9.90895 16.1993 9.66787 16L6.06903 13.2063C5.73636 12.9312 5.26364 12.9312 4.93097 13.2063L1.33213 16C1.09105 16.1993 0.960216 16.5128 1.01077 16.8276C1.51825 19.9872 3.76135 22.1338 5.13836 22.9048Z'
                fill={color}
            />
        </svg>
    );
};

export default ReadyToSendBoldMdSVG;
