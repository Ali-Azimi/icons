import React from 'react';

const UploadOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M15 15.8001C15 15.2478 15.4477 14.8 16 14.8L18.3 14.8C19.7911 14.8 20.9999 13.5911 20.9999 12.1C20.9999 10.9786 20.3163 10.0169 19.3431 9.60888C19.0248 9.47544 18.6756 9.40123 18.3091 9.40001L18.2999 9.39999L18.2908 9.40001C17.9778 9.40105 17.6773 9.45535 17.398 9.55431C17.3995 9.50305 17.4002 9.45161 17.4002 9.40001C17.4002 8.75415 17.2868 8.13477 17.0788 7.5607C16.3266 5.4839 14.3367 4 12.0002 4C9.66366 4 7.67373 5.48395 6.92147 7.56079C6.71354 8.13484 6.60017 8.75418 6.60017 9.40001C6.60017 9.45166 6.60089 9.50315 6.60234 9.55445C6.3229 9.4554 6.02232 9.40105 5.70918 9.40001L5.7 9.39999L5.69083 9.40001C5.32417 9.40123 4.97473 9.47553 4.6563 9.60911C3.68337 10.0173 3 10.9788 3 12.1C3 13.5912 4.20883 14.8 5.7 14.8L7.99999 14.8001C8.55228 14.8001 9 15.2478 9 15.8001C9 16.3524 8.55228 16.8001 8 16.8001H5.7L5.67031 16.7999C3.08824 16.7839 1 14.6858 1 12.1C1 9.79353 2.66139 7.8751 4.85272 7.47616C5.69959 4.32202 8.57872 2 12.0002 2C15.4217 2 18.3008 4.32206 19.1477 7.47624C21.3388 7.87536 22.9999 9.79368 22.9999 12.1C22.9999 14.6858 20.9118 16.7839 18.3297 16.7999L18.3 16.8001H16C15.4477 16.8001 15 16.3524 15 15.8001Z'
                fill={color}
            />
            <path
                d='M11 12.4142V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V12.4142L13.2929 12.7071C13.6834 13.0976 14.3166 13.0976 14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L12.7102 9.29602C12.6997 9.28543 12.689 9.27506 12.678 9.26495C12.5931 9.18647 12.4978 9.12542 12.3968 9.08181C12.2752 9.02916 12.141 8.99999 12 8.99999C11.859 8.99999 11.7248 9.02917 11.6032 9.08181C11.5022 9.12542 11.4069 9.18647 11.322 9.26495C11.311 9.27503 11.3003 9.28535 11.2899 9.2959L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071L11 12.4142Z'
                fill={color}
            />
        </svg>
    );
};

export default UploadOutlineMdSVG;