import React from 'react';

const CrossCircleOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L8 7.29289L9.64645 5.64645C9.84171 5.45118 10.1583 5.45118 10.3536 5.64645C10.5488 5.84171 10.5488 6.15829 10.3536 6.35355L8.70711 8L10.3536 9.64645C10.5488 9.84171 10.5488 10.1583 10.3536 10.3536C10.1583 10.5488 9.84171 10.5488 9.64645 10.3536L8 8.70711L6.35355 10.3536C6.15829 10.5488 5.84171 10.5488 5.64645 10.3536C5.45118 10.1583 5.45118 9.84171 5.64645 9.64645L7.29289 8L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
                fill={color}
            />
        </svg>
    );
};

export default CrossCircleOutlineSmSVG;
