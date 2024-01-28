import React from 'react';

const CompareOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.4561 1.79494C13.5694 2.04676 13.4571 2.34277 13.2053 2.45608L12 2.99847L12 3.00012V7.50012H14C14.2761 7.50012 14.5 7.72398 14.5 8.00012V8.50012C14.5 10.157 13.1569 11.5001 11.5 11.5001C9.84315 11.5001 8.5 10.157 8.5 8.50012V8.00012C8.5 7.72398 8.72386 7.50012 9 7.50012H11V3.44847L5 6.14847V10.5001H7C7.27614 10.5001 7.5 10.724 7.5 11.0001V11.5001C7.5 13.157 6.15685 14.5001 4.5 14.5001C2.84315 14.5001 1.5 13.157 1.5 11.5001V11.0001C1.5 10.724 1.72386 10.5001 2 10.5001H4V6.59847L3.20531 6.95608C2.95349 7.0694 2.65748 6.95713 2.54416 6.70531C2.43084 6.45349 2.54312 6.15748 2.79494 6.04416L12.7949 1.54416C13.0468 1.43084 13.3428 1.54312 13.4561 1.79494ZM13.5 8.50012C13.5 9.60469 12.6046 10.5001 11.5 10.5001C10.3954 10.5001 9.5 9.60469 9.5 8.50012H13.5ZM6.5 11.5001H2.5C2.5 12.6047 3.39543 13.5001 4.5 13.5001C5.60457 13.5001 6.5 12.6047 6.5 11.5001Z'
                fill={color}
            />
        </svg>
    );
};

export default CompareOutlineSmSVG;