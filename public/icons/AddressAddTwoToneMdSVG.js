import React from 'react';

const AddressAddTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.99915 1C9.55143 1 9.99915 1.44772 9.99915 2V22C9.99915 22.5523 9.55143 23 8.99915 23C8.44686 23 7.99915 22.5523 7.99915 22V2C7.99915 1.44772 8.44686 1 8.99915 1Z'
                fill='#040A1F'
            />
            <path
                d='M14.9991 19C14.9991 18.4477 15.4469 18 15.9991 18H17.9991V16C17.9991 15.4477 18.4469 15 18.9991 15C19.5514 15 19.9991 15.4477 19.9991 16V18H21.9991C22.5514 18 22.9991 18.4477 22.9991 19C22.9991 19.5523 22.5514 20 21.9991 20H19.9991V22C19.9991 22.5523 19.5514 23 18.9991 23C18.4469 23 17.9991 22.5523 17.9991 22V20H15.9991C15.4469 20 14.9991 19.5523 14.9991 19Z'
                fill='#040A1F'
            />
            <path
                d='M13.5016 3.5L6.99915 3.50008C6.17072 3.50008 5.49915 4.17165 5.49915 5.00008V9.00008C5.49915 9.8285 6.17072 10.5001 6.99915 10.5001L13.5016 10.5C13.8682 10.5 14.2222 10.3657 14.4965 10.1225L16.3308 8.49669C17.2286 7.70088 17.2286 6.29913 16.3308 5.50331L14.4965 3.87748C14.2222 3.63428 13.8682 3.5 13.5016 3.5Z'
                fill={color}
            />
            <path
                d='M4.49675 13.5C4.13011 13.5 3.77617 13.6343 3.50179 13.8775L1.66753 15.5033C0.769678 16.2991 0.76968 17.7009 1.66753 18.4967L3.50179 20.1225C3.77617 20.3657 4.13011 20.5 4.49675 20.5H10.9992C11.8276 20.5 12.4992 19.8284 12.4992 19V15C12.4992 14.1716 11.8276 13.5 10.9992 13.5H4.49675Z'
                fill={color}
            />
        </svg>
    );
};

export default AddressAddTwoToneMdSVG;