import React from 'react';

const MyRemindersBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.75 2C5.75 1.58579 5.41421 1.25 5 1.25C4.58579 1.25 4.25 1.58579 4.25 2V3.25H3C2.0335 3.25 1.25 4.0335 1.25 5V11C1.25 13.071 2.92893 14.75 5 14.75H8.17158C8.21525 14.75 8.25 14.7141 8.25 14.6704V10C8.25 9.0335 9.0335 8.25 10 8.25H14.45C14.6157 8.25 14.75 8.11569 14.75 7.95V5C14.75 4.0335 13.9665 3.25 13 3.25H11.75V2C11.75 1.58579 11.4142 1.25 11 1.25C10.5858 1.25 10.25 1.58579 10.25 2V3.25H5.75V2Z'
                fill={color}
            />
            <path
                d='M14.2058 9.75C14.2448 9.75 14.265 9.79566 14.2374 9.82323L10.1161 13.9445C9.97361 14.087 9.75 13.9748 9.75 13.7732V10C9.75 9.86193 9.86193 9.75 10 9.75H14.2058Z'
                fill={color}
            />
        </svg>
    );
};

export default MyRemindersBoldSmSVG;
