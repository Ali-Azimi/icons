import React from 'react';

const JobCategoryBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 2C5.0335 2 4.25 2.7835 4.25 3.75V5H3C2.52017 5 2.08544 5.19312 1.7693 5.50587C1.65083 5.62306 1.68483 5.81384 1.82134 5.9094L6.23648 9H9.76365L14.1787 5.90946C14.3152 5.8139 14.3492 5.62312 14.2308 5.50593C13.9146 5.19314 13.4799 5 13 5H11.7501L11.75 3.74996C11.75 2.78348 10.9665 2 10 2H6ZM5.75 3.75V5H10.2501L10.25 3.74999C10.25 3.61192 10.1381 3.5 10 3.5H6C5.86193 3.5 5.75 3.61193 5.75 3.75Z'
                fill={color}
            />
            <path
                d='M14.278 7.67097C14.4768 7.53178 14.75 7.67403 14.75 7.91674V12.75C14.75 13.7165 13.9665 14.5 13 14.5H3C2.0335 14.5 1.25 13.7165 1.25 12.75V7.91665C1.25 7.67394 1.52321 7.53169 1.72204 7.67088L5.56997 10.3644C5.69603 10.4527 5.84619 10.5 6.00006 10.5H10.0001C10.1539 10.5 10.3041 10.4527 10.4302 10.3644L14.278 7.67097Z'
                fill={color}
            />
        </svg>
    );
};

export default JobCategoryBoldSmSVG;