import React from 'react';

const CompanyPropertyBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.5257 1.14935C12.8205 1.33156 13 1.65342 13 2V22C13 22.5523 12.5523 23 12 23H2C1.44772 23 1 22.5523 1 22V7.61804C1 6.86049 1.428 6.16796 2.10557 5.82918L11.5528 1.10557C11.8628 0.95058 12.2309 0.967144 12.5257 1.14935ZM9 11V9L5 9V11H9ZM9 13V15H5V13H9Z'
                fill={color}
            />
            <path
                d='M19 6C19.5523 6 20 6.44772 20 7V9.36356L22.0917 10.6967C22.3873 10.8854 22.6161 11.1505 22.7686 11.4483C22.921 11.7457 22.9979 12.0751 23 12.4038L23 12.41L23 21C23 21.4849 22.8362 21.9752 22.5082 22.3579C22.1761 22.7454 21.6895 23 21.1429 23H16C15.4477 23 15 22.5523 15 22V8C15 7.6349 15.199 7.29881 15.5191 7.12323C15.8392 6.94765 16.2296 6.96048 16.5375 7.15672L18 8.08886V7C18 6.44772 18.4477 6 19 6Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyPropertyBoldMdSVG;