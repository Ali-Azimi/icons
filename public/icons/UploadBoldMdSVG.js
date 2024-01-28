import React from 'react';

const UploadBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M19.1477 9.47624C18.3008 6.32206 15.4217 4 12.0002 4C8.57872 4 5.69959 6.32202 4.85272 9.47616C2.66139 9.8751 1 11.7935 1 14.1C1 16.6858 3.08824 18.7839 5.67031 18.7999L5.7 18.8001H11V13.4142L10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071C8.90237 13.3166 8.90237 12.6834 9.29289 12.2929L11.2929 10.2929C11.6834 9.90237 12.3166 9.90237 12.7071 10.2929L14.7071 12.2929C15.0976 12.6834 15.0976 13.3166 14.7071 13.7071C14.3166 14.0976 13.6834 14.0976 13.2929 13.7071L13 13.4142V18.8001H18.3L18.3297 18.7999C20.9118 18.7839 22.9999 16.6858 22.9999 14.1C22.9999 11.7937 21.3388 9.87536 19.1477 9.47624Z'
                fill={color}
            />
        </svg>
    );
};

export default UploadBoldMdSVG;