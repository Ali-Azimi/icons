import React from 'react';

const SearchTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.7071 12.2929C12.0976 12.6834 12.0976 13.3166 11.7071 13.7071L10.8629 14.5513C10.9454 14.7815 10.9919 15.0252 10.999 15.2739C11.016 15.8682 10.8064 16.4467 10.4127 16.8921L10.4117 16.8932L5.73634 22.208L5.73421 22.2104C5.52286 22.4491 5.265 22.6422 4.97643 22.7777C4.68785 22.9133 4.37463 22.9885 4.05598 22.9988C3.73731 23.0091 3.41992 22.9542 3.12322 22.8375C2.82653 22.7208 2.55674 22.5448 2.33043 22.3202L2.32774 22.3175L1.68952 21.6793L1.68858 21.6783C1.4615 21.4519 1.28335 21.1814 1.16511 20.8834C1.04671 20.5849 0.990908 20.2653 1.0012 19.9444C1.0115 19.6236 1.08761 19.3082 1.22494 19.0179C1.36205 18.728 1.55718 18.4695 1.79821 18.2582L1.79931 18.2572L7.11463 13.5814L7.11653 13.5798C7.56439 13.1878 8.14467 12.981 8.73948 13.0014C8.98361 13.0097 9.22266 13.0561 9.44872 13.1371L10.2929 12.2929C10.6834 11.9024 11.3166 11.9024 11.7071 12.2929Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15 3C12.2386 3 10 5.23858 10 8C10 10.7614 12.2386 13 15 13C17.7614 13 20 10.7614 20 8C20 5.23858 17.7614 3 15 3ZM8 8C8 4.13401 11.134 1 15 1C18.866 1 22 4.13401 22 8C22 11.866 18.866 15 15 15C11.134 15 8 11.866 8 8Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default SearchTwoToneMdSVG;