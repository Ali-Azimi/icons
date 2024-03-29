import React from 'react';

const YourHouseOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.3201 2.61589C8.13468 2.46137 7.86534 2.46137 7.67992 2.61589L5.5 4.43249V3C5.5 2.72386 5.27614 2.5 5 2.5C4.72386 2.5 4.5 2.72386 4.5 3V5.26582L1.67992 7.61589C1.46778 7.79267 1.43912 8.10795 1.6159 8.32009C1.79268 8.53223 2.10797 8.56089 2.3201 8.38411L3 7.81753V13.5H2C1.72386 13.5 1.5 13.7239 1.5 14C1.5 14.2761 1.72386 14.5 2 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14C14.5 13.7239 14.2761 13.5 14 13.5H13V7.81751L13.6799 8.38411C13.8921 8.56089 14.2073 8.53223 14.3841 8.32009C14.5609 8.10795 14.5322 7.79267 14.3201 7.61589L8.3201 2.61589ZM12 13.5H4V7L3.99976 6.9844L8.00001 3.65085L12.0002 6.98438L12 7V13.5Z'
                fill={color}
            />
        </svg>
    );
};

export default YourHouseOutlineSmSVG;
