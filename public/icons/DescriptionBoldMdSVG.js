import React from 'react';

const DescriptionBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 4C1 2.34315 2.34315 1 4 1H16C17.6569 1 19 2.34315 19 4V11C19 12.6569 17.6569 14 16 14H6.66667C6.4503 14 6.23976 14.0702 6.06667 14.2L3.4 16.2C2.41115 16.9416 1 16.2361 1 15V4ZM6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7H14C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5H6ZM5 10C5 9.44771 5.44772 9 6 9H10C10.5523 9 11 9.44771 11 10C11 10.5523 10.5523 11 10 11H6C5.44772 11 5 10.5523 5 10Z'
                fill={color}
            />
            <path
                d='M9 16.4999C9 16.2237 9.22386 15.9999 9.5 15.9999H17C19.2091 15.9999 21 14.209 21 11.9999V8.87592C21 8.53114 21.3428 8.2931 21.6324 8.48021C22.454 9.01114 23 9.93177 23 10.9845V21.5028C23 22.7487 21.5805 23.4295 20.603 22.702C20.5684 22.6763 20.5356 22.6484 20.5047 22.6184L17.8925 20.0912C17.7281 19.982 17.5335 19.9228 17.3333 19.9228H12C10.3504 19.9228 9 18.5939 9 16.9382V16.4999Z'
                fill={color}
            />
        </svg>
    );
};

export default DescriptionBoldMdSVG;
