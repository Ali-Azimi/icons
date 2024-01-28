import React from 'react';

const SortSecondaryOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2.64645 3.64645C2.45118 3.84171 2.45118 4.15829 2.64645 4.35355C2.84171 4.54882 3.15829 4.54882 3.35355 4.35355L4.5 3.20711L4.5 9C4.5 9.27614 4.72386 9.5 5 9.5C5.27614 9.5 5.5 9.27614 5.5 9L5.5 3.20711L6.64645 4.35355C6.84171 4.54882 7.15829 4.54882 7.35355 4.35355C7.54882 4.15829 7.54882 3.84171 7.35355 3.64645L5.35355 1.64645C5.25979 1.55268 5.13261 1.5 5 1.5C4.86739 1.5 4.74022 1.55268 4.64645 1.64645L2.64645 3.64645Z'
                fill={color}
            />
            <path
                d='M11 6.5C10.7239 6.5 10.5 6.72386 10.5 7L10.5 12.7929L9.35355 11.6464C9.15829 11.4512 8.84171 11.4512 8.64645 11.6464C8.45119 11.8417 8.45119 12.1583 8.64645 12.3536L10.6464 14.3536C10.7402 14.4473 10.8674 14.5 11 14.5C11.1326 14.5 11.2598 14.4473 11.3536 14.3536L13.3536 12.3536C13.5488 12.1583 13.5488 11.8417 13.3536 11.6464C13.1583 11.4512 12.8417 11.4512 12.6464 11.6464L11.5 12.7929L11.5 7C11.5 6.72386 11.2761 6.5 11 6.5Z'
                fill={color}
            />
        </svg>
    );
};

export default SortSecondaryOutlineSmSVG;