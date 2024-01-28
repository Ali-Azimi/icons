import React from 'react';

const NotDamagedBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.64372 2.02326C6.98259 1.78319 7.43613 1.5 8 1.5C8.56748 1.5 9.02254 1.79119 9.35903 2.03584C9.44109 2.0955 9.52176 2.15689 9.59713 2.21424L9.61078 2.22463C9.69174 2.28622 9.76676 2.3431 9.84089 2.39636C9.99091 2.50415 10.1171 2.58211 10.2335 2.63095C10.3532 2.68118 10.5007 2.71883 10.684 2.75354C10.7746 2.77069 10.868 2.78611 10.9684 2.80257L10.978 2.80415C11.0736 2.81983 11.1756 2.83656 11.277 2.85549C11.6759 2.92995 12.1993 3.05721 12.5694 3.46306C12.9234 3.85119 13.0396 4.36102 13.1126 4.75999C13.1318 4.86523 13.1484 4.96361 13.1641 5.05615C13.2154 5.36019 13.2561 5.60129 13.3454 5.81541C13.4312 6.021 13.5758 6.20498 13.7662 6.44725C13.8227 6.51918 13.8834 6.59632 13.9476 6.68062C14.1913 7.00021 14.5 7.44498 14.5 8C14.5 8.54335 14.2107 8.99985 13.9753 9.33416C13.9182 9.41519 13.8594 9.49534 13.8041 9.57075L13.7903 9.58956C13.7299 9.67201 13.6737 9.749 13.6211 9.82485C13.5144 9.97865 13.4365 10.1081 13.3879 10.2254C13.3407 10.3392 13.3058 10.4848 13.2746 10.6716C13.2593 10.7635 13.2459 10.859 13.2317 10.9619L13.2281 10.9879C13.2152 11.0811 13.2015 11.1804 13.1859 11.2791C13.1213 11.6875 13.0081 12.2323 12.6075 12.6195C12.2171 12.9969 11.6987 13.1095 11.2973 13.1762C11.1841 13.195 11.0795 13.2107 10.982 13.2252C10.6859 13.2694 10.4549 13.3039 10.2472 13.3888C10.0447 13.4716 9.86474 13.6044 9.63022 13.7775C9.54695 13.839 9.45678 13.9055 9.35629 13.9767C9.01741 14.2168 8.56387 14.5 8 14.5C7.44337 14.5 6.98708 14.207 6.65173 13.9654C6.57045 13.9069 6.49024 13.8466 6.415 13.79L6.39788 13.7771C6.31606 13.7156 6.23989 13.6586 6.16472 13.6052C6.01244 13.4971 5.88406 13.4184 5.76652 13.3691C5.64683 13.3188 5.49935 13.2812 5.31602 13.2465C5.22542 13.2293 5.13197 13.2139 5.03161 13.1974L5.02214 13.1959C4.92653 13.1802 4.82446 13.1634 4.723 13.1445C4.3241 13.07 3.80075 12.9428 3.43058 12.5369C3.07657 12.1488 2.96044 11.639 2.88742 11.24C2.86819 11.1349 2.85161 11.0367 2.83602 10.9443C2.78471 10.6403 2.74395 10.3987 2.65458 10.1846C2.56877 9.979 2.42418 9.79502 2.23378 9.55275C2.17725 9.48082 2.11663 9.40368 2.05237 9.31938C1.80873 8.99979 1.5 8.55502 1.5 8C1.5 7.45665 1.78926 7.00015 2.02471 6.66584C2.08177 6.58483 2.14053 6.5047 2.19582 6.42931L2.20965 6.41044C2.2701 6.32799 2.32631 6.251 2.37893 6.17515C2.48564 6.02134 2.56348 5.89187 2.61209 5.77458C2.65926 5.66077 2.69423 5.51523 2.72537 5.32843C2.74068 5.23653 2.75413 5.14096 2.76835 5.03813L2.77196 5.012C2.78484 4.91876 2.79855 4.81952 2.81413 4.72093C2.8787 4.3125 2.99192 3.76772 3.39249 3.38051C3.78291 3.0031 4.30135 2.89054 4.7027 2.82378C4.81587 2.80495 4.92048 2.78933 5.01802 2.77477C5.31408 2.73056 5.54511 2.69606 5.75284 2.61116C5.95532 2.52841 6.13526 2.39559 6.36978 2.22248C6.45305 2.16101 6.54322 2.09445 6.64372 2.02326ZM11.5606 6.49828C11.8357 6.18869 11.8079 5.71464 11.4983 5.43945C11.1887 5.16426 10.7146 5.19215 10.4394 5.50174L6.96789 9.40724L5.53033 7.96968C5.23744 7.67678 4.76256 7.67678 4.46967 7.96968C4.17678 8.26257 4.17678 8.73744 4.46967 9.03034L6.46967 11.0303C6.61573 11.1764 6.81556 11.2558 7.02203 11.2497C7.2285 11.2436 7.42333 11.1527 7.56056 10.9983L11.5606 6.49828Z'
                fill={color}
            />
        </svg>
    );
};

export default NotDamagedBoldSmSVG;