import React from 'react';

const BirthDateBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.00473 1.50002C8.18518 1.50173 8.35071 1.60054 8.43785 1.75857L9.66734 3.98831C9.86122 4.27792 9.97494 4.61624 9.99884 4.96589C9.99961 4.97724 10 4.98862 10 4.99999C10 5.51992 9.80729 6.02479 9.4547 6.40206C9.25352 6.61732 9.00912 6.78117 8.74084 6.88244C8.74687 6.92074 8.75 6.96 8.75 7V9.25H10C11.5188 9.25 12.75 10.4812 12.75 12V12.95C12.75 13.1157 12.8843 13.25 13.05 13.25H14C14.4142 13.25 14.75 13.5858 14.75 14C14.75 14.4142 14.4142 14.75 14 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H2.95C3.11569 13.25 3.25 13.1157 3.25 12.95V12C3.25 10.4812 4.48122 9.25 6 9.25H7.25V7C7.25 6.96 7.25313 6.92074 7.25916 6.88244C6.99088 6.78117 6.74648 6.61732 6.5453 6.40206C6.19271 6.02479 6 5.51992 6 4.99999V4.99641C6.00251 4.64606 6.09524 4.3012 6.27054 3.99951L7.5668 1.75033C7.65691 1.59398 7.82428 1.49832 8.00473 1.50002Z'
                fill={color}
            />
        </svg>
    );
};

export default BirthDateBoldSmSVG;