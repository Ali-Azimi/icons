import React from 'react';

const PaperVersionOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.9567 19H15.4545C18.5172 19 21 16.5172 21 13.4545C21 12.6512 20.3488 12 19.5455 12H16.5455C15.1971 12 13.9612 12.4812 13 13.2813V10.9735C15.8067 10.6995 18 8.33316 18 5.45454V2.45455C18 1.65122 17.3488 1 16.5455 1C13.4828 1 11 3.48278 11 6.54545V9.28126C10.0388 8.48121 8.80288 8 7.45455 8H3.45455C2.65122 8 2 8.65122 2 9.45455C2 12.5172 4.48278 15 7.54545 15H11V18.3431C11 19.1388 10.6839 19.9019 10.1213 20.4645L9.29289 21.2929C8.90237 21.6834 8.90237 22.3166 9.29289 22.7071C9.68342 23.0976 10.3166 23.0976 10.7071 22.7071L11.5355 21.8787C12.317 21.0972 12.8131 20.0836 12.9567 19ZM13 8.9583C14.6991 8.69593 16 7.22716 16 5.45455V3.0417C14.3009 3.30407 13 4.77284 13 6.54545V8.9583ZM7.54545 13C5.77284 13 4.30407 11.6991 4.0417 10H7.45455C9.22716 10 10.6959 11.3009 10.9583 13H7.54545ZM15.4545 17C17.2272 17 18.6959 15.6991 18.9583 14H16.5455C14.7728 14 13.3041 15.3009 13.0417 17H15.4545Z'
                fill={color}
            />
        </svg>
    );
};

export default PaperVersionOutlineMdSVG;
