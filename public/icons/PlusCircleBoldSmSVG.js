import React from 'react';

const PlusCircleBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 4.75C8.41421 4.75 8.75 5.08579 8.75 5.5V7.25H10.5C10.9142 7.25 11.25 7.58579 11.25 8C11.25 8.41421 10.9142 8.75 10.5 8.75H8.75V10.5C8.75 10.9142 8.41421 11.25 8 11.25C7.58579 11.25 7.25 10.9142 7.25 10.5V8.75H5.5C5.08579 8.75 4.75 8.41421 4.75 8C4.75 7.58579 5.08579 7.25 5.5 7.25H7.25V5.5C7.25 5.08579 7.58579 4.75 8 4.75Z'
                fill={color}
            />
        </svg>
    );
};

export default PlusCircleBoldSmSVG;
