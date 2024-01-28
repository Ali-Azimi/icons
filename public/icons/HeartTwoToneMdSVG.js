import React from 'react';

const HeartTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M10.2813 3.45834C7.98652 1.34746 4.46722 1.55423 2.41918 3.90912C0.526937 6.08487 0.52694 9.37714 2.41918 11.5529L9.73858 19.9689C10.9342 21.3437 13.0658 21.3437 14.2614 19.9689L21.5808 11.5529C23.4731 9.37714 23.4731 6.08487 21.5808 3.90912C19.5328 1.55423 16.0135 1.34746 13.7187 3.45834L12 5.0393L10.2813 3.45834Z'
                fill={color}
            />
        </svg>
    );
};

export default HeartTwoToneMdSVG;
