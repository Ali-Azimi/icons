import React from 'react';

const FormTextBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M10 14.75C10.4142 14.75 10.75 14.4142 10.75 14V12.75H12C13.5188 12.75 14.75 11.5188 14.75 10V6C14.75 4.48122 13.5188 3.25 12 3.25H10.75V2C10.75 1.58579 10.4142 1.25 10 1.25C9.58579 1.25 9.25 1.58579 9.25 2V14C9.25 14.4142 9.58579 14.75 10 14.75Z'
                fill={color}
            />
            <path
                d='M2.75 10C2.75 10.6904 3.30964 11.25 4 11.25H8V12.75H4C2.48122 12.75 1.25 11.5188 1.25 10V6C1.25 4.48122 2.48122 3.25 4 3.25H8V4.75H4C3.30964 4.75 2.75 5.30964 2.75 6V10Z'
                fill={color}
            />
            <path d='M5 8.75H8.25V7.25H5C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75Z' fill={color} />
        </svg>
    );
};

export default FormTextBoldSmSVG;
