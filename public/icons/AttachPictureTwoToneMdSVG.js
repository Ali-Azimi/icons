import React from 'react';

const AttachPictureTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M17 3C20.3137 3 23 5.68629 23 9V17C23 20.3137 20.3137 23 17 23H9C5.68629 23 3 20.3137 3 17V9C3 5.68629 5.68629 3 9 3H17Z'
                fill={color}
            />
            <path
                d='M5 1C2.79086 1 1 2.79086 1 5V7C1 7.55228 1.44772 8 2 8C2.55228 8 3 7.55228 3 7V5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5V8.5C7 8.77614 6.77614 9 6.5 9C6.22386 9 6 8.77614 6 8.5V6C6 5.44772 5.55228 5 5 5C4.44772 5 4 5.44772 4 6V8.5C4 9.88071 5.11929 11 6.5 11C7.88071 11 9 9.88071 9 8.5V5C9 2.79086 7.20914 1 5 1Z'
                fill='#040A1F'
            />
            <path
                d='M3.40454 19.1703C3.65974 19.8278 4.02749 20.4291 4.48413 20.9507L7.65889 17.5007C8.04955 17.0762 8.71961 17.0762 9.11027 17.5007C10.2932 18.7862 12.3221 18.7862 13.505 17.5007L17.3923 13.2765C17.7885 12.846 18.4679 12.846 18.864 13.2765L22.9413 17.7072L22.9609 17.6891C22.9867 17.463 23 17.2331 23 17L23 14.8174L20.3357 11.9222C19.1473 10.6308 17.109 10.6308 15.9206 11.9222L12.0334 16.1464C11.6427 16.571 10.9726 16.571 10.582 16.1464C9.39904 14.861 7.37012 14.861 6.1872 16.1464L3.40454 19.1703Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default AttachPictureTwoToneMdSVG;
