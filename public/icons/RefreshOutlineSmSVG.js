import React from 'react';

const RefreshOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.4907 1.53319C10.7486 1.43445 11.0377 1.56347 11.1365 1.82135L12.149 4.46595C12.2054 4.61337 12.189 4.77878 12.1045 4.91215C12.0201 5.04553 11.8777 5.13121 11.7203 5.14327L8.91148 5.35856C8.63615 5.37966 8.39584 5.17356 8.37473 4.89823C8.35363 4.62289 8.55972 4.38258 8.83506 4.36148L10.3599 4.24461C8.43891 3.09839 5.91183 3.34983 4.2568 4.99892C2.30503 6.94369 2.30503 10.096 4.2568 12.0408C6.20957 13.9866 9.37637 13.9866 11.3291 12.0408C12.3053 11.0681 12.793 9.79463 12.793 8.51987C12.793 8.24372 13.0168 8.01987 13.293 8.01987C13.5691 8.01987 13.793 8.24372 13.793 8.51987C13.793 10.0501 13.2067 11.5817 12.035 12.7492C9.69197 15.0838 5.89396 15.0838 3.55096 12.7492C1.20697 10.4136 1.20697 6.62613 3.55096 4.29054C5.4616 2.38676 8.3398 2.03545 10.6075 3.23661L10.2026 2.17892C10.1038 1.92103 10.2328 1.63193 10.4907 1.53319Z'
                fill={color}
            />
        </svg>
    );
};

export default RefreshOutlineSmSVG;