import React from 'react';

const MaleOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7C10.3431 7 9 5.65685 9 4ZM12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 15.8948C14.8893 15.4914 16.37 13.9675 16.6187 12.0309L16.9919 9.12404C17.0686 8.52718 16.5905 8 15.9726 8H8.0274C7.40951 8 6.93144 8.52718 7.00808 9.12403L7.38134 12.0309C7.63002 13.9675 9.11069 15.4914 11 15.8948V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V15.8948ZM9.36505 11.7762L9.13698 10L14.863 10L14.6349 11.7762C14.4771 13.005 13.3829 14 12 14C10.6171 14 9.52285 13.005 9.36505 11.7762Z'
                fill={color}
            />
        </svg>
    );
};

export default MaleOutlineMdSVG;
