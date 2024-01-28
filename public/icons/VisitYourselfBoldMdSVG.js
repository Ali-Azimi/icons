import React from 'react';

const VisitYourselfBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.85703 12.1052C3.24841 10.8527 4.40831 10 5.72047 10H10.2797C11.5919 10 12.7518 10.8527 13.1431 12.1052L14.2614 15.6836C14.7265 16.3372 15 17.1367 15 18V19C15 20.1046 14.1046 21 13 21V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H5V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22L3 21C1.89543 21 1 20.1046 1 19V18C1 17.1365 1.27363 16.3369 1.73891 15.6831L2.85703 12.1052ZM11.6399 14L11.2342 12.7017C11.1037 12.2843 10.7171 12 10.2797 12H5.72047C5.28308 12 4.89645 12.2842 4.76599 12.7017L4.36027 14H11.6399Z'
                fill={color}
            />
            <path d='M9 4C9 2.34315 10.3431 1 12 1H20C21.6569 1 23 2.34315 23 4L9 4Z' fill={color} />
            <path
                d='M9 6H23V17C23 17.5523 22.5523 18 22 18H17.3284C17.181 18 17.0506 17.9042 17.0067 17.7635C16.998 17.7359 16.993 17.7072 16.9915 17.6783C16.9361 16.6292 16.6112 15.6516 16.0847 14.8133L15.052 11.5086C14.3997 9.42125 12.4665 8 10.2796 8H9.5C9.22386 8 9 7.77614 9 7.5V6Z'
                fill={color}
            />
            <path
                d='M14 22.929C14 22.9682 14.0318 23 14.071 23H20C21.313 23 22.4289 22.1565 22.8356 20.9819C23.0163 20.46 22.5523 20 22 20H17.6492C17.1929 20 16.8062 20.3158 16.6089 20.7272C16.112 21.7635 15.1819 22.5526 14.0533 22.8599C14.022 22.8684 14 22.8966 14 22.929Z'
                fill={color}
            />
        </svg>
    );
};

export default VisitYourselfBoldMdSVG;