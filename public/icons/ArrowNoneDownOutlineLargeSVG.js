import React from 'react';

const ArrowNoneDownOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M17.5 7C17.5 6.17157 16.8284 5.5 16 5.5C15.1716 5.5 14.5 6.17157 14.5 7L14.5 21.3787L11.0607 17.9393C10.4749 17.3536 9.52513 17.3536 8.93934 17.9393C8.35355 18.5251 8.35355 19.4749 8.93934 20.0607L14.9393 26.0607C15.0837 26.205 15.2502 26.3138 15.4278 26.387C15.6001 26.4582 15.7886 26.4981 15.9862 26.4999C15.9908 26.5 15.9954 26.5 16 26.5C16.0046 26.5 16.0092 26.5 16.0138 26.4999C16.4176 26.4963 16.7832 26.3331 17.0508 26.0704C17.0545 26.0668 17.0581 26.0632 17.0617 26.0596L23.0607 20.0607C23.6464 19.4749 23.6464 18.5251 23.0607 17.9393C22.4749 17.3536 21.5251 17.3536 20.9393 17.9393L17.5 21.3787L17.5 7Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowNoneDownOutlineLargeSVG;
