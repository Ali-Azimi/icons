import React from 'react';

const NotificationBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M8.12602 20C8.57006 21.7252 10.1362 23 12 23C13.8638 23 15.4299 21.7252 15.874 20H8.12602Z' fill={color} />
            <path
                d='M12 1C12.5523 1 13 1.44772 13 2V3.07089C16.3923 3.55612 19 6.47353 19 10V13.3611C19 13.7527 19.2212 14.1106 19.5714 14.2857L19.9751 14.4875C20.6032 14.8016 21 15.4436 21 16.1459C21 17.1699 20.1699 18 19.1459 18H4.8541C3.83011 18 3 17.1699 3 16.1459C3 15.4436 3.39678 14.8016 4.02492 14.4875L4.42857 14.2857C4.77878 14.1106 5 13.7527 5 13.3611V10C5 6.47353 7.60771 3.55612 11 3.07089V2C11 1.44772 11.4477 1 12 1Z'
                fill={color}
            />
        </svg>
    );
};

export default NotificationBoldMdSVG;