import React from 'react';

const NotMultipleDamageBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13.624 2.41604C13.8538 2.0714 13.7607 1.60575 13.416 1.37598C13.0714 1.14622 12.6057 1.23935 12.376 1.58399L10.376 4.58399C10.2225 4.81414 10.2082 5.11004 10.3387 5.35391C10.4693 5.59778 10.7234 5.75002 11 5.75002H12.5986L11.376 7.58399C11.1462 7.92864 11.2393 8.39429 11.584 8.62406C11.9286 8.85382 12.3943 8.76069 12.624 8.41604L14.624 5.41604C14.7775 5.1859 14.7918 4.88999 14.6613 4.64613C14.5307 4.40226 14.2766 4.25002 14 4.25002H12.4014L13.624 2.41604Z'
                fill={color}
            />
            <path
                d='M12.75 10.5C12.75 10.443 12.6946 10.4023 12.6395 10.4169C11.9713 10.5934 11.2335 10.4936 10.6133 10.0801C9.74629 9.50217 9.35679 8.47639 9.54702 7.5141C9.57322 7.38156 9.47693 7.25 9.34182 7.25H4.28061C4.09129 7.25 3.94931 7.0768 3.98643 6.89117L4.2137 5.75486C4.33055 5.17057 4.84357 4.75 5.43942 4.75H6.79981C6.91027 4.75 6.99981 4.66046 6.99981 4.55V3.45C6.99981 3.33954 6.91027 3.25 6.79981 3.25H5.43942C4.12855 3.25 2.99991 4.17526 2.74282 5.46068L2.28215 7.76406C2.26852 7.83223 2.23122 7.89309 2.17915 7.93913C1.6093 8.44299 1.25 9.17954 1.25 10V10.5C1.25 11.4665 2.0335 12.25 3 12.25H3.25V14C3.25 14.4142 3.58579 14.75 4 14.75C4.41421 14.75 4.75 14.4142 4.75 14V12.25H9.25V14C9.25 14.4142 9.58579 14.75 10 14.75C10.4142 14.75 10.75 14.4142 10.75 14V12.25H11C11.9665 12.25 12.75 11.4665 12.75 10.5Z'
                fill={color}
            />
        </svg>
    );
};

export default NotMultipleDamageBoldSmSVG;
