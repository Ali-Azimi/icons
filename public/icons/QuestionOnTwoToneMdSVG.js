import React from 'react';

const QuestionOnTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 8C11.4477 8 11 8.44772 11 9C11 9.3772 11.2085 9.70715 11.5212 9.87836C11.8315 10.0482 12.1796 10.2907 12.4613 10.6191C12.7472 10.9526 13 11.4196 13 12V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V12.0061C10.9962 11.9953 10.9829 11.9676 10.9431 11.9211C10.8664 11.8316 10.735 11.7281 10.5608 11.6327C9.63289 11.1247 9 10.137 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 9.55229 14.5523 10 14 10C13.4477 10 13 9.55229 13 9C13 8.44772 12.5523 8 12 8Z'
                fill='#040A1F'
            />
            <path
                d='M12 15.25C11.3096 15.25 10.75 15.8096 10.75 16.5C10.75 17.1904 11.3096 17.75 12 17.75C12.6904 17.75 13.25 17.1904 13.25 16.5C13.25 15.8096 12.6904 15.25 12 15.25Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default QuestionOnTwoToneMdSVG;