import React from 'react';

const MyRemindersOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H20C21.6569 3 23 4.34315 23 6V11.9289C23 13.5202 22.3679 15.0464 21.2426 16.1716L16.4142 21C15.1543 22.2599 13 21.3676 13 19.5858V15C13 13.8954 13.8954 13 15 13H20.8539C20.9501 12.6542 21 12.2941 21 11.9289V11H3V17C3 19.2091 4.79086 21 7 21H10C10.5523 21 11 21.4477 11 22C11 22.5523 10.5523 23 10 23H7C3.68629 23 1 20.3137 1 17V6C1 4.34315 2.34315 3 4 3H6V2C6 1.44772 6.44772 1 7 1ZM16 5V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V5H20C20.5523 5 21 5.44772 21 6V9H3V6C3 5.44772 3.44772 5 4 5H6V6C6 6.55228 6.44772 7 7 7C7.55228 7 8 6.55228 8 6V5H16ZM15 15H19.5858L15 19.5858L15 15Z'
                fill={color}
            />
        </svg>
    );
};

export default MyRemindersOutlineMdSVG;
