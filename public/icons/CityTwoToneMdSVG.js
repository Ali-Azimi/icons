import React from 'react';

const CityTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 16C9.45088 16 7.10661 16.2859 5.3684 16.7687C4.50632 17.0082 3.7362 17.3115 3.15832 17.691C2.62116 18.0438 2 18.634 2 19.5C2 20.366 2.62116 20.9562 3.15832 21.309C3.7362 21.6885 4.50632 21.9918 5.3684 22.2313C7.10661 22.7141 9.45088 23 12 23C14.5491 23 16.8934 22.7141 18.6316 22.2313C19.4937 21.9918 20.2638 21.6885 20.8417 21.309C21.3788 20.9562 22 20.366 22 19.5C22 18.634 21.3788 18.0438 20.8417 17.691C20.2638 17.3115 19.4937 17.0082 18.6316 16.7687C16.8934 16.2859 14.5491 16 12 16Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 10.9C15.2822 10.4367 17 8.41896 17 6C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6C7 8.41896 8.71776 10.4367 11 10.9V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V10.9ZM9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default CityTwoToneMdSVG;
