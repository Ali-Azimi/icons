import React from 'react';

const SupportOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 3C7.58172 3 4 6.58172 4 11H5C6.65685 11 8 12.3431 8 14C8 15.6569 6.65685 17 5 17H2V11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11V16C22 19.3137 19.3137 22 16 22H15C15 22.5523 14.5523 23 14 23C13.4477 23 13 22.5523 13 22V19C13 18.4477 13.4477 18 14 18C14.5523 18 15 18.4477 15 19V20H16C17.8638 20 19.4299 18.7252 19.874 17H19C17.3431 17 16 15.6569 16 14C16 12.3431 17.3431 11 19 11H20C20 6.58172 16.4183 3 12 3ZM20 13H19C18.4477 13 18 13.4477 18 14C18 14.5523 18.4477 15 19 15H20V13ZM4 15V13H5C5.55228 13 6 13.4477 6 14C6 14.5523 5.55228 15 5 15H4Z'
                fill={color}
            />
        </svg>
    );
};

export default SupportOutlineMdSVG;
