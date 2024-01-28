import React from 'react';

const BirthDateOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.0095 1.00004C12.3704 1.00346 12.7014 1.20108 12.8757 1.51714L14.5083 4.47795C14.795 4.91086 14.9623 5.41367 14.9977 5.93179C14.9992 5.95449 15 5.97724 15 5.99999C15 6.77463 14.713 7.53002 14.1831 8.09701C13.8545 8.4487 13.4477 8.71048 13 8.85921V11H16C18.7614 11 21 13.2386 21 16V17V21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H20H4H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H3V17V16C3 13.2386 5.23858 11 8 11H11V8.85921C10.5523 8.71048 10.1455 8.4487 9.81686 8.09701C9.28696 7.53002 9 6.77463 9 5.99999V5.99282C9.00376 5.46897 9.14231 4.95228 9.40555 4.49904L11.1336 1.50067C11.3138 1.18796 11.6486 0.996632 12.0095 1.00004ZM5 21H19V18.4911C18.6339 18.7391 18.1209 19 17.3298 19C16.3329 19 15.7775 18.5856 15.4015 18.305L15.3967 18.3015C15.1027 18.0821 14.9884 18 14.6596 18C14.3309 18 14.2165 18.0821 13.9225 18.3015L13.9178 18.305C13.5417 18.5856 12.9863 19 11.9894 19C11.5212 19 11.1311 18.9098 10.7887 18.7547C10.4796 18.6146 10.2383 18.4321 10.0816 18.3136L10.061 18.2981C9.88724 18.1669 9.80503 18.1094 9.71339 18.0681C9.64038 18.0353 9.53039 18 9.32981 18C9.12927 18 9.01795 18.0353 8.94298 18.0689C8.8494 18.1108 8.7654 18.1692 8.59026 18.3004L8.56964 18.3158C8.41176 18.4343 8.16956 18.616 7.86037 18.7554C7.51796 18.9098 7.1279 19 6.65963 19C6.19142 19 5.80124 18.9098 5.45879 18.7553C5.28307 18.676 5.12914 18.5831 5 18.4958V21ZM11.9807 4.03607L11.1354 5.5029C11.0505 5.64876 11.0019 5.82214 11 6.00361C11.0009 6.28843 11.1076 6.54902 11.2781 6.7314C11.4471 6.91226 11.6613 6.99999 11.8692 6.99999H12.1308C12.3387 6.99999 12.5529 6.91226 12.7219 6.7314C12.8862 6.55563 12.9913 6.30722 12.9995 6.03449C12.982 5.86066 12.922 5.69965 12.831 5.56774C12.8121 5.54033 12.7946 5.512 12.7785 5.48285L11.9807 4.03607ZM12 13H8C6.34315 13 5 14.3431 5 16V16.1637C5.06881 16.1883 5.13569 16.2153 5.20084 16.2447C5.51121 16.3848 5.75361 16.5673 5.91151 16.6862L5.93083 16.7008C6.10617 16.8326 6.18907 16.8906 6.28132 16.9322C6.35443 16.9652 6.46293 17 6.65963 17C6.85627 17 6.96489 16.9652 7.03838 16.9321C7.13129 16.8902 7.21453 16.832 7.39127 16.6996L7.40928 16.6861C7.56856 16.5667 7.81237 16.3838 8.1253 16.2436C8.46885 16.0897 8.86018 16 9.32981 16C9.79943 16 10.1908 16.0897 10.5343 16.2444C10.8471 16.3852 11.0901 16.5688 11.2481 16.6883L11.2482 16.6883L11.2661 16.7019C11.4415 16.8343 11.523 16.8916 11.614 16.9328C11.6855 16.9652 11.7928 17 11.9894 17C12.3182 17 12.4325 16.9179 12.7266 16.6985L12.7313 16.695C13.1074 16.4144 13.6627 16 14.6596 16C15.6565 16 16.2119 16.4144 16.588 16.695L16.5927 16.6985C16.8867 16.9179 17.0011 17 17.3298 17C17.6586 17 17.7729 16.9179 18.0669 16.6985L18.0716 16.695C18.2975 16.5265 18.588 16.3097 19 16.1634V16C19 14.3431 17.6569 13 16 13H12Z'
                fill={color}
            />
        </svg>
    );
};

export default BirthDateOutlineMdSVG;