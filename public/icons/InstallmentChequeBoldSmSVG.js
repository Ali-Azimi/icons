import React from 'react';

const InstallmentChequeBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.25 4C1.25 2.48122 2.48122 1.25 4 1.25H13C13.9665 1.25 14.75 2.0335 14.75 3V7.95C14.75 8.11569 14.6157 8.25 14.45 8.25H13.65C13.5672 8.25 13.5 8.18282 13.5 8.09995C13.5 7.71049 13.3737 7.33152 13.14 7.01995L11.94 5.41995C11.22 4.45995 9.78 4.45995 9.06 5.41995L7.86 7.01995C7.62632 7.33152 7.5 7.71048 7.5 8.09995C7.5 8.18282 7.43282 8.25 7.34995 8.25H4C2.86094 8.25 1.88364 8.94252 1.46614 9.92949C1.44827 9.97175 1.40727 10 1.36139 10C1.29987 10 1.25 9.95013 1.25 9.88861V4Z'
                fill={color}
            />
            <path
                d='M12 14.7C12 14.8656 11.8657 15 11.7 15H9.3C9.13431 15 9 14.8656 9 14.7V8.09995C9 8.03504 9.02105 7.97188 9.06 7.91995L10.26 6.31995C10.38 6.15995 10.62 6.15995 10.74 6.31995L11.94 7.91995C11.9789 7.97188 12 8.03504 12 8.09995V14.7Z'
                fill={color}
            />
            <path
                d='M6.45 12.25C6.61569 12.25 6.75 12.1157 6.75 11.95V10.05C6.75 9.88431 6.61569 9.75 6.45 9.75H4C3.30964 9.75 2.75 10.3096 2.75 11C2.75 11.6904 3.30964 12.25 4 12.25H6.45Z'
                fill={color}
            />
        </svg>
    );
};

export default InstallmentChequeBoldSmSVG;
