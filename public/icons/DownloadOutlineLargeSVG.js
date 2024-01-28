import React from 'react';

const DownloadOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.5001 2C17.3285 2 18.0001 2.67157 18.0001 3.5V16.3569L20.3477 13.5398C20.8781 12.9033 21.8239 12.8174 22.4603 13.3477C23.0967 13.8781 23.1827 14.8239 22.6524 15.4603L17.6602 21.451C17.6372 21.4789 17.6133 21.506 17.5885 21.5322C17.3324 21.8021 16.9769 21.9769 16.5806 21.9979C16.5539 21.9993 16.527 22 16.5 22C16.162 22 15.8372 21.886 15.5756 21.6814C15.4928 21.6165 15.4163 21.5426 15.3477 21.4603L10.3477 15.4603C9.81736 14.8239 9.90335 13.8781 10.5398 13.3477C11.1762 12.8174 12.122 12.9033 12.6524 13.5398L15.0001 16.357V3.5C15.0001 2.67157 15.6716 2 16.5001 2ZM5.62113 23.5035C5.07075 22.8843 4.12264 22.8285 3.50347 23.3789C2.8843 23.9293 2.82853 24.8774 3.3789 25.4966L4.8522 27.154C5.89592 28.3282 7.39194 29 8.96295 29H24.0371C25.6081 29 27.1041 28.3282 28.1478 27.154L29.6211 25.4966C30.1715 24.8774 30.1157 23.9293 29.4966 23.3789C28.8774 22.8285 27.9293 22.8843 27.3789 23.5035L25.9056 25.1609C25.4312 25.6946 24.7512 26 24.0371 26H8.96295C8.24885 26 7.56884 25.6946 7.09442 25.1609L5.62113 23.5035Z'
                fill={color}
            />
        </svg>
    );
};

export default DownloadOutlineLargeSVG;
