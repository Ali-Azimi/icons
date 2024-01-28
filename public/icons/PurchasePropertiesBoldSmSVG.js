import React from 'react';

const PurchasePropertiesBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M14 10.8776V2C14 1.44771 13.5523 1 13 1H7C6.44772 1 6 1.44771 6 2V8.2C6 8.36569 6.13431 8.5 6.3 8.5H9.5C10.3284 8.5 11 9.17157 11 10V11C11 11.8284 11.6716 12.5 12.5 12.5C13.1085 12.5 13.6324 12.1376 13.8677 11.6169C13.9532 11.3867 14 11.1376 14 10.8776Z'
                fill={color}
            />
            <path
                d='M9.5 10.3C9.5 10.1343 9.36569 10 9.2 10H3C2.44771 10 2 10.4477 2 11C2 12.6569 3.11929 14 4.5 14H10.8445C10.9304 14 11 13.9304 11 13.8445C11 13.7866 10.9677 13.7339 10.9176 13.705C10.0789 13.2208 9.5 12.1915 9.5 11V10.3Z'
                fill={color}
            />
        </svg>
    );
};

export default PurchasePropertiesBoldSmSVG;
