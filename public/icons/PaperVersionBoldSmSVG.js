import React from 'react';

const PaperVersionBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.25 6.54545C7.25 3.62086 9.62086 1.25 12.5455 1.25C13.2107 1.25 13.75 1.78929 13.75 2.45455V3.45454C13.75 6.18364 11.6855 8.43055 9.0331 8.71876C8.87475 8.73596 8.75 8.86657 8.75 9.02585V14C8.75 14.4142 8.41421 14.75 8 14.75C7.58579 14.75 7.25 14.4142 7.25 14V12.05C7.25 11.8843 7.11569 11.75 6.95 11.75H5.63636C3.21384 11.75 1.25 9.78616 1.25 7.36364C1.25 6.74859 1.74859 6.25 2.36364 6.25L4.36364 6.25C5.23166 6.25 6.04079 6.50213 6.72179 6.93716C6.93897 7.07589 7.25 6.93018 7.25 6.67247V6.54545Z'
                fill={color}
            />
        </svg>
    );
};

export default PaperVersionBoldSmSVG;
