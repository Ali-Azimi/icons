import React from 'react';

const DropdownOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.7431 16.189C11.4645 16.8398 12.5355 16.8398 13.2569 16.189L17.3331 12.5119C18.6769 11.2996 17.8538 9 16.0761 9H7.92385C6.14614 9 5.3231 11.2996 6.66692 12.5119L10.7431 16.189ZM12 14.6771L7.92385 11H16.0761L12 14.6771Z'
                fill={color}
            />
        </svg>
    );
};

export default DropdownOutlineMdSVG;
