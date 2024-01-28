import React from 'react';

const HeartBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M10.2813 4.45834C7.98652 2.34746 4.46722 2.55423 2.41918 4.90912C0.526937 7.08487 0.52694 10.3771 2.41918 12.5529L9.73858 20.9689C10.9342 22.3437 13.0658 22.3437 14.2614 20.9689L21.5808 12.5529C23.4731 10.3771 23.4731 7.08487 21.5808 4.90912C19.5328 2.55423 16.0135 2.34746 13.7187 4.45834L12 6.0393L10.2813 4.45834Z'
                fill={color}
            />
        </svg>
    );
};

export default HeartBoldMdSVG;
