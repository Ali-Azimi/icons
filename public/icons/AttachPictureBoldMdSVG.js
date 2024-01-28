import React from 'react';

const AttachPictureBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 1C2.79086 1 1 2.79086 1 5V7C1 7.55228 1.44772 8 2 8C2.55228 8 3 7.55228 3 7V5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5V8.5C7 8.77614 6.77614 9 6.5 9C6.22386 9 6 8.77614 6 8.5V6C6 5.44772 5.55228 5 5 5C4.44772 5 4 5.44772 4 6V8.5C4 9.88071 5.11929 11 6.5 11C7.88071 11 9 9.88071 9 8.5V5C9 2.79086 7.20914 1 5 1Z'
                fill={color}
            />
            <path
                d='M3 17V14.1542C3 13.2117 4.41851 12.6013 5.32868 12.846C5.70215 12.9465 6.09482 13 6.5 13C8.98528 13 11 10.9853 11 8.5V5C11 4.78943 10.9892 4.58139 10.968 4.37642C10.8971 3.68992 11.3825 3 12.0727 3H17C20.3137 3 23 5.68629 23 9V14.0484C23 14.3217 22.6643 14.4526 22.4792 14.2515L20.3357 11.9222C19.1473 10.6308 17.109 10.6308 15.9206 11.9222L12.0334 16.1464C11.6427 16.571 10.9726 16.571 10.582 16.1464C9.39905 14.861 7.37012 14.861 6.1872 16.1464L3.73069 18.8159C3.58029 18.9793 3.31197 18.9276 3.2486 18.7147C3.08686 18.1714 3 17.5959 3 17Z'
                fill={color}
            />
            <path
                d='M22.9586 17.7085C22.9594 17.7018 22.9515 17.6977 22.9466 17.7023C22.9436 17.705 22.9391 17.7048 22.9364 17.7018L18.864 13.2765C18.4679 12.846 17.7885 12.846 17.3923 13.2765L13.505 17.5007C12.3221 18.7862 10.2932 18.7862 9.11028 17.5007C8.71961 17.0762 8.04956 17.0762 7.65889 17.5007L4.66649 20.7525C4.56275 20.8653 4.56004 21.0386 4.666 21.1493C5.7582 22.2898 7.29616 23 9 23H17C20.074 23 22.6081 20.6883 22.9586 17.7085Z'
                fill={color}
            />
        </svg>
    );
};

export default AttachPictureBoldMdSVG;
