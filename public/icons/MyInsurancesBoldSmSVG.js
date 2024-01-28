import React from 'react';

const MyInsurancesBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.52941 0.999999C4.92129 0.999999 3.61765 2.30364 3.61765 3.91176C3.61765 5.51989 4.92129 6.82353 6.52941 6.82353C8.13753 6.82353 9.44118 5.51989 9.44118 3.91176C9.44118 2.30364 8.13753 0.999999 6.52941 0.999999Z'
                fill={color}
            />
            <path
                d='M4.41176 8.41176C2.80364 8.41176 1.5 9.71541 1.5 11.3235V13.4412C1.5 13.8798 1.85554 14.2353 2.29412 14.2353H8.33698C8.51742 14.2353 8.61779 14.0215 8.51129 13.8759C7.31038 12.2331 7.05882 10.2498 7.05882 9.20588C7.05882 9.04862 7.0821 8.89444 7.12634 8.74766C7.17338 8.59158 7.06784 8.41176 6.90483 8.41176H4.41176Z'
                fill={color}
            />
            <path
                d='M11.941 7.16654C11.8699 7.11912 11.7772 7.11912 11.7061 7.16655L8.74136 9.14302C8.68244 9.18229 8.64679 9.24786 8.64816 9.31865C8.67598 10.7631 9.2452 13.4687 11.8235 14.5C14.4019 13.4687 14.9711 10.7631 14.9989 9.31865C15.0003 9.24786 14.9646 9.18229 14.9057 9.14302L11.941 7.16654Z'
                fill={color}
            />
        </svg>
    );
};

export default MyInsurancesBoldSmSVG;
