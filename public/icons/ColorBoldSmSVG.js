import React from 'react';

const ColorBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.05091 1.25C6.88522 1.25 6.75091 1.38431 6.75091 1.55V4.5C6.75091 4.91421 6.41512 5.25 6.00091 5.25C5.5867 5.25 5.25091 4.91421 5.25091 4.5V1.55C5.25091 1.38431 5.1166 1.25 4.95091 1.25H3.02824C1.96422 1.25 1.10396 2.18024 1.27079 3.26259L2.06433 8.41093C2.27389 9.77049 3.46571 10.75 4.83798 10.75H6.25098V13C6.25098 13.9665 7.03448 14.75 8.00098 14.75C8.96747 14.75 9.75098 13.9665 9.75098 13V10.75H11.1629C12.5352 10.75 13.727 9.77049 13.9366 8.41093L14.7301 3.26259C14.897 2.18024 14.0367 1.25 12.9727 1.25H7.05091Z'
                fill={color}
            />
        </svg>
    );
};

export default ColorBoldSmSVG;
