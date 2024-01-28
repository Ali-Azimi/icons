import React from 'react';

const TickCircleOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.3536 6.35355C11.5488 6.15829 11.5488 5.84171 11.3536 5.64645C11.1583 5.45118 10.8417 5.45118 10.6464 5.64645L7 9.29289L5.35355 7.64645C5.15829 7.45118 4.84171 7.45118 4.64645 7.64645C4.45118 7.84171 4.45118 8.15829 4.64645 8.35355L6.64645 10.3536C6.84171 10.5488 7.15829 10.5488 7.35355 10.3536L11.3536 6.35355Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z'
                fill={color}
            />
        </svg>
    );
};

export default TickCircleOutlineSmSVG;
