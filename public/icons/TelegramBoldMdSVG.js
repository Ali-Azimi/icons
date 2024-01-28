import React from 'react';

const TelegramBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M21.3938 2.2114L1.85523 9.87589C1.85523 9.87589 0.931112 10.192 1.00411 10.7759C1.0771 11.3599 1.83114 11.6278 1.83114 11.6278L6.29368 13.1296C6.57972 13.2259 6.89393 13.1878 7.14871 13.0261L18.547 5.78816C18.547 5.78816 19.2281 5.37428 19.204 5.78816C19.204 5.78816 19.3259 5.86116 18.9609 6.20131C18.6104 6.52803 10.3808 13.927 9.73115 14.5111C9.70199 14.5373 9.68804 14.5691 9.68353 14.608C9.677 14.6642 9.70052 14.7198 9.74545 14.7542L17.6952 20.8492C19.0339 21.4332 19.5201 20.2164 19.5201 20.2164L22.9997 2.67346C22.9997 1.50553 21.3938 2.2114 21.3938 2.2114Z'
                fill={color}
            />
        </svg>
    );
};

export default TelegramBoldMdSVG;
