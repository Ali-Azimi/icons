import React from 'react';

const ImageAddOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.5 1.5C11.7762 1.5 12 1.72386 12 2V4H14C14.2762 4 14.5 4.22386 14.5 4.5C14.5 4.77614 14.2762 5 14 5H12V7C12 7.27614 11.7762 7.5 11.5 7.5C11.2239 7.5 11 7.27614 11 7V5H9.00001C8.72387 5 8.50001 4.77614 8.50001 4.5C8.50001 4.22386 8.72387 4 9.00001 4H11V2C11 1.72386 11.2239 1.5 11.5 1.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 4.5C3.17157 4.5 2.5 5.17157 2.5 6V8.10892L2.8391 7.8075C3.78631 6.96553 5.2137 6.96553 6.16091 7.8075L7.58219 9.07086C7.82047 9.28266 8.17954 9.28266 8.41782 9.07086C9.03499 8.52226 9.96502 8.52226 10.5822 9.07086L12.325 10.62C12.3508 10.6421 12.3743 10.6668 12.3952 10.6936C12.409 10.7115 12.4215 10.73 12.4326 10.7492C12.4733 10.8191 12.4974 10.8999 12.4998 10.986C12.5 10.9919 12.5 10.9977 12.5 11.0036V12C12.5 13.3807 11.3807 14.5 10 14.5H4C2.61929 14.5 1.5 13.3807 1.5 12V6C1.5 4.61929 2.61929 3.5 4 3.5H7C7.27614 3.5 7.5 3.72386 7.5 4C7.5 4.27614 7.27614 4.5 7 4.5H4ZM3.50346 8.55491L2.5 9.44688V12C2.5 12.8284 3.17157 13.5 4 13.5H10C10.8284 13.5 11.5 12.8284 11.5 12V11.3594C11.5 11.2737 11.4634 11.1921 11.3993 11.1351L9.91782 9.81826C9.67954 9.60646 9.32047 9.60646 9.08219 9.81826C8.46502 10.3669 7.53499 10.3669 6.91782 9.81826L5.49655 8.55491C4.92822 8.04973 4.07179 8.04973 3.50346 8.55491Z'
                fill={color}
            />
        </svg>
    );
};

export default ImageAddOutlineSmSVG;
