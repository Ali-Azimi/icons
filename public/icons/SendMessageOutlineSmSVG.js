import React from 'react';

const SendMessageOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.502 4.01299C13.5021 3.6735 13.1056 3.37326 12.6975 3.55143L2.51177 7.9984C2.51052 7.99895 2.50938 7.99948 2.50835 7.99998C2.50938 8.00048 2.51051 8.00101 2.51176 8.00156L12.696 12.4486C13.1039 12.6268 13.5004 12.3267 13.5004 11.9872V10.0232C13.5004 9.74702 13.7243 9.52316 14.0004 9.52316C14.2766 9.52316 14.5004 9.74702 14.5004 10.0232V11.9872C14.5004 13.122 13.2947 13.8012 12.2958 13.365L2.11159 8.918C1.29871 8.56304 1.29875 7.43684 2.11165 7.08194L12.2974 2.63496C13.2965 2.19876 14.5024 2.87834 14.502 4.01338L14.5008 6.9889C14.5005 7.84613 13.7781 8.49994 12.9388 8.49994H9.61827C9.34213 8.49994 9.11827 8.27608 9.11827 7.99994C9.11827 7.7238 9.34213 7.49994 9.61827 7.49994H12.9388C13.2723 7.49994 13.5007 7.24839 13.5008 6.98851L13.502 4.01299Z'
                fill={color}
            />
        </svg>
    );
};

export default SendMessageOutlineSmSVG;
