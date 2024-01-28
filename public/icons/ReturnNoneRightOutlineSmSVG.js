import React from 'react';

const ReturnNoneRightOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.64645 4.64645C9.84171 4.45118 10.1583 4.45118 10.3536 4.64645L12.3536 6.64645C12.5488 6.84171 12.5488 7.15829 12.3536 7.35355L10.3536 9.35355C10.1583 9.54882 9.84171 9.54882 9.64645 9.35355C9.45118 9.15829 9.45118 8.84171 9.64645 8.64645L10.7929 7.5H6C5.17157 7.5 4.5 8.17157 4.5 9C4.5 9.82843 5.17157 10.5 6 10.5H7C7.27614 10.5 7.5 10.7239 7.5 11C7.5 11.2761 7.27614 11.5 7 11.5H6C4.61929 11.5 3.5 10.3807 3.5 9C3.5 7.61929 4.61929 6.5 6 6.5H10.7929L9.64645 5.35355C9.45118 5.15829 9.45118 4.84171 9.64645 4.64645Z'
                fill={color}
            />
        </svg>
    );
};

export default ReturnNoneRightOutlineSmSVG;
