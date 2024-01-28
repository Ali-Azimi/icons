import React from 'react';

const AddressOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C12.5523 1 13 1.44772 13 2V3H17.6667C18.0994 3 18.5205 3.14036 18.8667 3.4L21 5C22.3333 6 22.3333 8 21 9L18.8667 10.6C18.5205 10.8596 18.0994 11 17.6667 11H13V13H14C15.1046 13 16 13.8954 16 15V19C16 20.1046 15.1046 21 14 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H6.33333C5.90059 21 5.47953 20.8596 5.13333 20.6L3 19C1.66667 18 1.66667 16 3 15L5.13333 13.4C5.47953 13.1404 5.90059 13 6.33333 13H11V11H10C8.89543 11 8 10.1046 8 9V5C8 3.89543 8.89543 3 10 3H11V2C11 1.44772 11.4477 1 12 1ZM17.6667 5H10V9H17.6667L19.8 7.4C20.0667 7.2 20.0667 6.8 19.8 6.6L17.6667 5ZM14 15H6.33333L4.2 16.6C3.93333 16.8 3.93333 17.2 4.2 17.4L6.33333 19H14V15Z'
                fill={color}
            />
        </svg>
    );
};

export default AddressOutlineMdSVG;