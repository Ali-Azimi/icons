import React from 'react';

const VisitSpareItemOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 2.5C5.51472 2.5 3.5 4.51472 3.5 7C3.5 8.65091 4.38901 10.0942 5.71442 10.8772C5.88584 10.9785 6 11.1581 6 11.3572C6 11.7264 5.62844 11.9776 5.3067 11.7965C5.00417 11.6263 4.71937 11.4283 4.45577 11.2059C4.4316 11.2594 4.39753 11.3096 4.35355 11.3536L2.35355 13.3536C2.15829 13.5488 1.84171 13.5488 1.64645 13.3536C1.45118 13.1583 1.45118 12.8417 1.64645 12.6464L3.64645 10.6464C3.69043 10.6025 3.74056 10.5684 3.79408 10.5442C2.98663 9.58701 2.5 8.35033 2.5 7C2.5 3.96243 4.96243 1.5 8 1.5C10.4826 1.5 12.5811 3.14491 13.265 5.40433C13.3574 5.70964 13.1153 6 12.7963 6C12.5578 6 12.354 5.83372 12.2802 5.60691C11.6937 3.8035 9.99905 2.5 8 2.5Z'
                fill={color}
            />
            <path
                d='M11.2725 8.04541C11.5486 8.04541 11.7725 8.26927 11.7725 8.54541V10.7727H13.9995C14.2756 10.7727 14.4995 10.9966 14.4995 11.2727C14.4995 11.5488 14.2756 11.7727 13.9995 11.7727H11.7725V14C11.7725 14.2761 11.5486 14.5 11.2725 14.5C10.9963 14.5 10.7725 14.2761 10.7725 14V11.7727H8.54492C8.26878 11.7727 8.04492 11.5488 8.04492 11.2727C8.04492 10.9966 8.26878 10.7727 8.54492 10.7727H10.7725V8.54541C10.7725 8.26927 10.9963 8.04541 11.2725 8.04541Z'
                fill={color}
            />
        </svg>
    );
};

export default VisitSpareItemOutlineSmSVG;