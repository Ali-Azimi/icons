import React from 'react';

const ArrowNoneRightOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.14645 4.64645C9.34171 4.45118 9.65829 4.45118 9.85355 4.64645L12.8536 7.64645C13.0488 7.84171 13.0488 8.15829 12.8536 8.35355L9.85355 11.3536C9.65829 11.5488 9.34171 11.5488 9.14645 11.3536C8.95118 11.1583 8.95118 10.8417 9.14645 10.6464L11.2929 8.5H3.5C3.22386 8.5 3 8.27614 3 8C3 7.72386 3.22386 7.5 3.5 7.5H11.2929L9.14645 5.35355C8.95118 5.15829 8.95118 4.84171 9.14645 4.64645Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowNoneRightOutlineSmSVG;
