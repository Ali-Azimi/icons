import React from 'react';

const DescriptionOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M5 6C5 5.44772 5.44772 5 6 5H14C14.5523 5 15 5.44772 15 6C15 6.55228 14.5523 7 14 7H6C5.44772 7 5 6.55228 5 6Z' fill={color} />
            <path
                d='M6 8C5.44772 8 5 8.44772 5 9C5 9.55229 5.44772 10 6 10H10C10.5523 10 11 9.55229 11 9C11 8.44772 10.5523 8 10 8H6Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 1C2.34315 1 1 2.34315 1 4V15C1 16.2361 2.41115 16.9416 3.4 16.2L6.06667 14.2C6.23976 14.0702 6.4503 14 6.66667 14H16C17.6569 14 19 12.6569 19 11V10H20C20.5523 10 21 10.4477 21 11V20.3418L19.2173 18.6705C19.1906 18.6455 19.1626 18.6219 19.1333 18.6C18.614 18.2105 17.9824 18 17.3333 18H12C11.4477 18 11 17.5523 11 17V16C11 15.4477 10.5523 15 10 15C9.44771 15 9 15.4477 9 16V17C9 18.6569 10.3431 20 12 20H17.3333C17.5345 20 17.7306 20.0607 17.8963 20.1735L20.5161 22.6295C20.5427 22.6545 20.5708 22.6781 20.6 22.7C21.5889 23.4416 23 22.7361 23 21.5V11C23 9.34315 21.6569 8 20 8H19V4C19 2.34315 17.6569 1 16 1H4ZM3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V11C17 11.5523 16.5523 12 16 12H6.66667C6.01756 12 5.38596 12.2105 4.86667 12.6L3 14V4Z'
                fill={color}
            />
        </svg>
    );
};

export default DescriptionOutlineMdSVG;
