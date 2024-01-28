import React from 'react';

const SendParcelBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3 1.25C2.0335 1.25 1.25 2.0335 1.25 3V5C1.25 5.88162 1.90193 6.61097 2.75 6.73228V13C2.75 13.9665 3.5335 14.75 4.5 14.75H10V13.25H4.5C4.36193 13.25 4.25 13.1381 4.25 13V6.75H13C13.9665 6.75 14.75 5.9665 14.75 5V3C14.75 2.0335 13.9665 1.25 13 1.25H3Z'
                fill={color}
            />
            <path
                d='M11.9697 8.46967C12.1128 8.32655 12.2994 8.25336 12.4869 8.25011C12.5093 8.24973 12.5316 8.25033 12.5539 8.25193C12.7176 8.26366 12.8782 8.32887 13.0073 8.44754C13.0158 8.45542 13.0242 8.46349 13.0324 8.47174L14.5303 9.96967C14.8232 10.2626 14.8232 10.7374 14.5303 11.0303C14.2374 11.3232 13.7626 11.3232 13.4697 11.0303L13.25 10.8107V14C13.25 14.4142 12.9142 14.75 12.5 14.75C12.0858 14.75 11.75 14.4142 11.75 14V10.8107L11.5303 11.0304C11.2374 11.3232 10.7626 11.3232 10.4697 11.0304C10.1768 10.7375 10.1768 10.2626 10.4697 9.96969L11.9662 8.47313L11.9697 8.46967Z'
                fill={color}
            />
        </svg>
    );
};

export default SendParcelBoldSmSVG;
