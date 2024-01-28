import React from 'react';

const VisitDoneBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 3C1 2.0335 1.77861 1.25 2.73908 1.25H8.70164C9.66211 1.25 10.4407 2.0335 10.4407 3V3.98769C10.4407 4.14167 10.2733 4.24005 10.1315 4.18233C9.26001 3.82777 8.22519 3.98873 7.49581 4.67952C6.49665 5.62581 6.449 7.208 7.38939 8.21343L8.79235 9.71343C9.1822 10.1303 9.69947 10.397 10.2554 10.4757C10.3592 10.4904 10.4407 10.5768 10.4407 10.6823V11.05C10.4407 11.1605 10.3517 11.25 10.242 11.25H1.19875C1.08898 11.25 1 11.1605 1 11.05V3Z'
                fill={color}
            />
            <path
                d='M1 12.95C1 12.8395 1.08898 12.75 1.19875 12.75H10.242C10.3517 12.75 10.4407 12.8395 10.4407 12.95V13C10.4407 13.9665 9.66211 14.75 8.70164 14.75H2.73908C1.77861 14.75 1 13.9665 1 13V12.95Z'
                fill={color}
            />
            <path
                d='M14.8095 4.50082C15.0843 4.19249 15.0588 3.71831 14.7524 3.44172C14.446 3.16513 13.9747 3.19086 13.6999 3.49919L10.6757 6.89162L9.82861 5.98598C9.5465 5.68435 9.0748 5.66997 8.77505 5.95386C8.47531 6.23774 8.46101 6.7124 8.74313 7.01403L10.1461 8.51403C10.2891 8.66689 10.4891 8.75246 10.6977 8.74995C10.9063 8.74744 11.1043 8.65708 11.2436 8.50082L14.8095 4.50082Z'
                fill={color}
            />
        </svg>
    );
};

export default VisitDoneBoldSmSVG;
