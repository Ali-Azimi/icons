import React from 'react';

const QuestionOnOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 13.4477 10 14 10C14.5523 10 15 9.55228 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.137 9.63289 11.1247 10.5608 11.6327C10.735 11.7281 10.8664 11.8316 10.9431 11.9211C10.9829 11.9676 10.9962 11.9953 11 12.0061V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V12C13 11.4196 12.7472 10.9526 12.4613 10.6191C12.1796 10.2907 11.8315 10.0482 11.5212 9.87836C11.2085 9.70715 11 9.3772 11 9Z'
                fill={color}
            />
            <path
                d='M11.9999 15.25C11.3096 15.25 10.7499 15.8096 10.7499 16.5C10.7499 17.1904 11.3096 17.75 11.9999 17.75C12.6903 17.75 13.2499 17.1904 13.2499 16.5C13.2499 15.8096 12.6903 15.25 11.9999 15.25Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'
                fill={color}
            />
        </svg>
    );
};

export default QuestionOnOutlineMdSVG;