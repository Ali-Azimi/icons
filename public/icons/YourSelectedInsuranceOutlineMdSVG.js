import React from 'react';

const YourSelectedInsuranceOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3.32792 6.27314L10.0371 1.77678C10.6067 1.36311 11.1828 1.09097 11.7694 1.01895C12.3904 0.942711 12.9394 1.10153 13.3937 1.40502L20.645 6.26362C21.0906 6.5569 21.4526 6.96122 21.6905 7.439C21.9295 7.91872 22.0337 8.45327 21.9905 8.98766C21.9459 9.53814 21.4636 9.9483 20.9131 9.90376C20.3626 9.85922 19.9524 9.37686 19.997 8.82638C20.0106 8.65748 19.978 8.48674 19.9003 8.33066C19.8224 8.17429 19.7008 8.03611 19.5438 7.9332L12.2822 3.06775C12.1978 3.01141 12.1251 2.9903 12.0131 3.00405C11.8725 3.02131 11.6097 3.10439 11.2005 3.40369C11.1894 3.41177 11.1782 3.41962 11.1669 3.42724L4.45774 7.92356C4.30321 8.031 4.18299 8.17154 4.10474 8.32958C4.02589 8.48884 3.9912 8.66257 4.00189 8.83517C4.00253 8.84545 4.00301 8.85574 4.00333 8.86603C4.08038 11.3517 4.83476 13.7763 6.19363 15.8959C7.55269 18.0157 9.4694 19.7567 11.754 20.94L11.7566 20.9414C11.8291 20.9792 11.9124 21 11.9988 21C12.0851 21 12.1684 20.9792 12.2409 20.9414C12.7306 20.6859 13.3346 20.8758 13.59 21.3655C13.8455 21.8551 13.6556 22.4592 13.1659 22.7146C12.8055 22.9026 12.4045 23 11.9988 23C11.594 23 11.1939 22.9031 10.8342 22.716C8.24415 21.3745 6.0617 19.3957 4.50994 16.9753C2.96055 14.5586 2.09553 11.7881 2.00473 8.94214C1.97552 8.42368 2.08193 7.90768 2.31237 7.44222C2.54517 6.972 2.8958 6.57063 3.32792 6.27314Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.9464 10.0765C12.7909 9.69127 11.6915 10.7906 12.0767 11.9462L14.7577 19.989C15.1875 21.2785 16.9832 21.3532 17.5186 20.1039L18.8943 16.894L22.1041 15.5183C23.3534 14.9829 23.2787 13.1872 21.9893 12.7574L13.9464 10.0765ZM16.221 18.0545L14.3041 12.3039L20.0547 14.2207L18.0904 15.0626C17.6286 15.2605 17.2607 15.6284 17.0628 16.0901L16.221 18.0545Z'
                fill={color}
            />
        </svg>
    );
};

export default YourSelectedInsuranceOutlineMdSVG;