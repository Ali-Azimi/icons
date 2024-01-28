import React from 'react';

const SendTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M19.5592 2.07004C20.415 1.75021 21.25 2.58523 20.9302 3.441L14.3821 20.9616C13.8821 22.2995 12.012 22.3595 11.4272 21.0565L8.65534 14.8806C8.54843 14.6425 8.35779 14.4518 8.1196 14.3449L1.94375 11.573C0.640702 10.9882 0.700767 9.11812 2.03866 8.6181L19.5592 2.07004Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21.8669 3.79112C22.487 2.13211 20.8682 0.513332 19.2092 1.13336L1.68859 7.68142C-0.486472 8.49432 -0.584129 11.5346 1.5343 12.4854L7.71015 15.2573C7.72477 15.2638 7.73647 15.2755 7.74303 15.2902L10.5149 21.466C11.4657 23.5844 14.506 23.4868 15.3189 21.3117L21.8669 3.79112ZM19.9093 3.0068C19.9237 3.00143 19.9321 3.00055 19.9355 3.00035C19.9392 3.00013 19.9421 3.00044 19.9451 3.00117C19.9521 3.00285 19.9651 3.00841 19.9785 3.02182C19.9919 3.03522 19.9974 3.04822 19.9991 3.05518C19.9999 3.05822 20.0002 3.06112 20 3.06477C19.9998 3.06815 19.9989 3.07659 19.9935 3.09095L13.4454 20.6115C13.2583 21.1123 12.5584 21.1347 12.3395 20.6471L9.6838 14.7299C9.69166 14.7226 9.69943 14.715 9.70711 14.7074L13.7071 10.7074C14.0976 10.3168 14.0976 9.68366 13.7071 9.29314C13.3166 8.90261 12.6834 8.90261 12.2929 9.29314L8.29289 13.2931C8.28521 13.3008 8.27768 13.3086 8.2703 13.3165L2.35324 10.6608C1.86557 10.4419 1.88804 9.74199 2.38876 9.55485L19.9093 3.0068Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default SendTwoToneMdSVG;