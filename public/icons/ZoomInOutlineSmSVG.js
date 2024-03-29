import React from 'react';

const ZoomInOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M9.5 5C9.5 4.72386 9.27614 4.5 9 4.5C8.72386 4.5 8.5 4.72386 8.5 5V6.5H7C6.72386 6.5 6.5 6.72386 6.5 7C6.5 7.27614 6.72386 7.5 7 7.5H8.5V9C8.5 9.27614 8.72386 9.5 9 9.5C9.27614 9.5 9.5 9.27614 9.5 9V7.5H11C11.2761 7.5 11.5 7.27614 11.5 7C11.5 6.72386 11.2761 6.5 11 6.5H9.5V5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.5 7C3.5 3.96243 5.96243 1.5 9 1.5C12.0376 1.5 14.5 3.96243 14.5 7C14.5 10.0376 12.0376 12.5 9 12.5C7.66127 12.5 6.43425 12.0217 5.48051 11.2267L2.35355 14.3536C2.15829 14.5489 1.84171 14.5489 1.64645 14.3536C1.45118 14.1584 1.45118 13.8418 1.64645 13.6465L4.7734 10.5196C3.97833 9.56582 3.5 8.33877 3.5 7ZM9 2.5C6.51472 2.5 4.5 4.51472 4.5 7C4.5 9.48528 6.51472 11.5 9 11.5C11.4853 11.5 13.5 9.48528 13.5 7C13.5 4.51472 11.4853 2.5 9 2.5Z'
                fill={color}
            />
        </svg>
    );
};

export default ZoomInOutlineSmSVG;
