import React from 'react';

const PersonalDamageTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M10.0023 4.37342C7.77885 2.38689 4.37561 2.5781 2.38648 4.7996C0.537838 6.86421 0.53784 9.99663 2.38648 12.0612L9.67968 20.2064C9.93147 20.4876 10.3201 20.6031 10.6846 20.505C11.0491 20.4069 11.3273 20.1119 11.4039 19.7423L12.6253 13.8491C12.6762 13.6035 12.6329 13.3477 12.5041 13.1324L10.5705 9.90288L12.3942 7.84666C12.7598 7.43454 12.7232 6.80442 12.3124 6.4374L10.0023 4.37342Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M20.1235 6.13373C18.8699 4.73369 16.7298 4.6144 15.3303 5.86484C14.9184 6.2328 14.2863 6.19723 13.9183 5.78539C13.5503 5.37354 13.5859 4.74137 13.9977 4.37341C16.2211 2.38688 19.6244 2.57808 21.6135 4.79959C23.4622 6.8642 23.4622 9.99661 21.6135 12.0612L14.3203 20.2064C13.9519 20.6179 13.3197 20.6528 12.9083 20.2844C12.4968 19.9159 12.4619 19.2837 12.8303 18.8723L20.1235 10.7271C21.2922 9.42192 21.2922 7.43888 20.1235 6.13373Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default PersonalDamageTwoToneMdSVG;