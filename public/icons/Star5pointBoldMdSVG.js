import React from 'react';

const Star5pointBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13.596 2.97852L15.8965 7.57908C15.9374 7.66812 16.0001 7.74565 16.0789 7.80465C16.1577 7.86366 16.2501 7.90229 16.3478 7.91704L21.4771 8.64746C21.8058 8.69725 22.114 8.83652 22.3674 9.04973C22.6208 9.26295 22.8094 9.54172 22.9122 9.85493C23.0149 10.1681 23.0278 10.5035 22.9493 10.8235C22.8708 11.1435 22.7041 11.4356 22.4677 11.6673L18.7583 15.2431C18.6879 15.3116 18.6352 15.3959 18.6045 15.4889C18.5739 15.5819 18.5662 15.6807 18.5822 15.7772L19.4628 20.8357C19.5166 21.1611 19.478 21.4949 19.3512 21.7997C19.2244 22.1046 19.0145 22.3685 18.7449 22.562C18.4754 22.7554 18.1568 22.8708 17.8248 22.8951C17.4928 22.9195 17.1605 22.8519 16.8651 22.6999L12.2862 20.3124C12.1971 20.2691 12.0992 20.2466 12 20.2466C11.9008 20.2466 11.8029 20.2691 11.7138 20.3124L7.13488 22.6999C6.83948 22.8519 6.50719 22.9195 6.17521 22.8951C5.84322 22.8708 5.52463 22.7554 5.25506 22.562C4.98549 22.3685 4.77558 22.1046 4.64881 21.7997C4.52203 21.4949 4.4834 21.1611 4.53722 20.8357L5.39577 15.7772C5.41176 15.6807 5.40411 15.5819 5.37346 15.4889C5.34281 15.3959 5.29006 15.3116 5.21966 15.2431L1.5323 11.6673C1.29592 11.4356 1.12919 11.1435 1.0507 10.8235C0.972213 10.5035 0.985059 10.1681 1.08781 9.85493C1.19055 9.54172 1.37916 9.26295 1.63258 9.04973C1.88599 8.83652 2.19424 8.69725 2.52293 8.64746L7.65222 7.91704C7.74987 7.90229 7.84227 7.86366 7.92106 7.80465C7.99986 7.74565 8.06256 7.66812 8.1035 7.57908L10.404 2.97852C10.5518 2.68457 10.7795 2.43728 11.0615 2.26442C11.3434 2.09157 11.6684 2 12 2C12.3316 2 12.6566 2.09157 12.9385 2.26442C13.2205 2.43728 13.4482 2.68457 13.596 2.97852Z'
                fill={color}
            />
        </svg>
    );
};

export default Star5pointBoldMdSVG;
