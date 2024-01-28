import React from 'react';

const ReferralBoldMdV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M17.2929 2.29289C17.6834 1.90237 18.3166 1.90237 18.7071 2.29289L21.4142 5L18.7071 7.70711C18.3166 8.09763 17.6834 8.09763 17.2929 7.70711C16.9024 7.31658 16.9024 6.68342 17.2929 6.29289L17.5858 6H15C13.3431 6 12 7.34315 12 9H21C21.0907 9 21.1808 9.00616 21.2697 9.01826C21.3824 9.03359 21.4009 9.19126 21.3178 9.26886L13.7929 15.2902L13.791 15.292C13.3064 15.7466 12.666 16 12 16C11.3341 16 10.6936 15.7466 10.209 15.292L2.68223 9.26886C2.59906 9.19126 2.61763 9.03359 2.73033 9.01825C2.81921 9.00616 2.90929 9 3 9H10C10 6.23858 12.2386 4 15 4H17.5858L17.2929 3.70711C16.9024 3.31658 16.9024 2.68342 17.2929 2.29289Z'
                fill={color}
            />
            <path
                d='M1 11C1 10.9326 1.0034 10.8655 1.01011 10.7991C1.02395 10.662 1.21704 10.6371 1.31778 10.7311L8.84065 16.7506L8.84173 16.7516C9.69733 17.5538 10.8268 18 12 18C13.1732 18 14.3026 17.5538 15.1582 16.7517L15.1594 16.7506L22.6822 10.7311C22.783 10.6371 22.976 10.662 22.9899 10.7991C22.9966 10.8655 23 10.9326 23 11V17C23 18.5913 22.3679 20.1174 21.2426 21.2426C20.1174 22.3679 18.5913 23 17 23H7C6.21207 23 5.43185 22.8448 4.7039 22.5433C3.97595 22.2417 3.31451 21.7998 2.75736 21.2426C1.63214 20.1174 1 18.5913 1 17V11Z'
                fill={color}
            />
        </svg>
    );
};

export default ReferralBoldMdV1SVG;