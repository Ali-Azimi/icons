import React from 'react';

const UploadBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 8.5C1 10.433 2.567 12 4.5 12H7.04994C7.1604 12 7.24994 11.9105 7.24994 11.8V8.13812L6.58562 8.96852C6.32687 9.29197 5.8549 9.34441 5.53145 9.08565C5.208 8.82689 5.15556 8.35493 5.41432 8.03148L7.41432 5.53148C7.55665 5.35357 7.77213 5.25 7.99997 5.25C8.22781 5.25 8.4433 5.35357 8.58562 5.53148L10.5856 8.03148C10.8444 8.35493 10.7919 8.82689 10.4685 9.08565C10.145 9.34441 9.67308 9.29197 9.41432 8.96852L8.74994 8.13805V11.8C8.74994 11.9105 8.83949 12 8.94994 12H11.5C13.433 12 15 10.433 15 8.5C15 6.86988 13.8858 5.50023 12.3771 5.11088C11.7751 3.29162 10.0292 2 8.00041 2C5.9717 2 4.22583 3.29151 3.62378 5.11065C2.11467 5.49969 1 6.86956 1 8.5Z'
                fill={color}
            />
        </svg>
    );
};

export default UploadBoldSmSVG;