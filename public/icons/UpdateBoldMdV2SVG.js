import React from 'react';

const UpdateBoldMdV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M21.2066 5.98493C21.0499 5.74486 20.7203 5.70167 20.4974 5.88199L19.113 7.00196L17.2034 8.68016C16.7887 9.04465 16.748 9.67635 17.1124 10.0911C17.4769 10.5058 18.1086 10.5466 18.5234 10.1821L20.3292 8.5951C21.0493 10.353 21.2208 12.3522 20.6912 14.3288C19.4923 18.8029 15.1243 21.5816 10.6495 20.8966C10.1037 20.8131 9.55536 21.1235 9.41245 21.6569C9.26955 22.1902 9.58625 22.7434 10.1302 22.8379C15.6754 23.8011 21.1377 20.3877 22.6225 14.8463C23.465 11.7024 22.8561 8.51149 21.2066 5.98493Z'
                fill={color}
            />
            <path
                d='M14.5875 2.34314C14.4446 2.87647 13.8963 3.1869 13.3505 3.10336C8.87567 2.41845 4.50766 5.19708 3.30882 9.67121C2.7792 11.6478 2.95069 13.6471 3.67086 15.405L5.47654 13.8181C5.89129 13.4536 6.52298 13.4944 6.88747 13.9091C7.25196 14.3238 7.21122 14.9555 6.79648 15.32L4.88871 16.9966L3.50257 18.118C3.27968 18.2983 2.95015 18.2551 2.79342 18.0151C1.14392 15.4885 0.53504 12.2976 1.37745 9.1537C2.86226 3.6123 8.32465 0.198883 13.8698 1.16213C14.4138 1.25663 14.7305 1.8098 14.5875 2.34314Z'
                fill={color}
            />
        </svg>
    );
};

export default UpdateBoldMdV2SVG;