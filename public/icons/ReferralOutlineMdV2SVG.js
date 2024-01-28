import React from 'react';

const ReferralOutlineMdV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.0182 1.16846C16.6036 0.972079 16.1285 0.946341 15.6951 1.09679L3.17032 5.63843C2.94624 5.71607 2.74035 5.83871 2.56532 5.99888C2.38704 6.16202 2.24468 6.36053 2.14734 6.58176C2.04997 6.80306 1.99984 7.04213 2 7.28372C2.00016 7.51209 2.04526 7.73812 2.13267 7.94895L4.48247 14.381C4.70301 14.9985 5.05083 15.5627 5.50341 16.0371C5.88462 16.4368 6.5176 16.4517 6.91723 16.0705C7.31685 15.6893 7.33178 15.0563 6.95057 14.6567C6.69084 14.3844 6.49138 14.0605 6.36514 13.706L4.47126 8.52188L9.89571 10.3199L9.89713 10.3203C10.5556 10.5403 11.269 10.5314 11.9218 10.295C12.5749 10.0585 13.1289 9.60808 13.4939 9.01699L13.494 9.01679L16.5034 4.14364L18.3818 9.37919L18.3832 9.38306C18.6277 10.0556 18.5951 10.7977 18.2927 11.4463C17.9903 12.0949 17.4427 12.5969 16.7704 12.842L14.2204 13.772C13.7016 13.9612 13.4344 14.5353 13.6236 15.0541C13.8128 15.573 14.3868 15.8402 14.9057 15.651L17.4557 14.721C18.626 14.2942 19.579 13.4204 20.1054 12.2914C20.6314 11.1631 20.6884 9.87224 20.2637 8.70206L20.2629 8.6999L17.9143 2.15377L17.9118 2.14679C17.7537 1.71618 17.4328 1.36485 17.0182 1.16846ZM5.82682 6.8642L14.385 3.76769L11.7922 7.96611L11.7921 7.96631C11.6641 8.17361 11.4698 8.33156 11.2408 8.41451C11.0117 8.49746 10.7614 8.50053 10.5303 8.42323L10.5277 8.42234L5.82682 6.8642Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19.8944 12.553C19.6474 12.059 19.0467 11.8588 18.5528 12.1058C18.0588 12.3528 17.8586 12.9535 18.1055 13.4474L18.4721 14.1806C18.8192 14.8748 19 15.6404 19 16.4166V21.0002H8C7.44772 21.0002 7 21.448 7 22.0002C7 22.5525 7.44772 23.0002 8 23.0002H21C21.5523 23.0002 22 22.5525 22 22.0002C22 21.448 21.5523 21.0002 21 21.0002H21V16.4166C21 15.3299 20.747 14.2581 20.261 13.2861L19.8944 12.553Z'
                fill={color}
            />
            <path
                d='M9 22V18.0464C9 17.0514 9.37089 16.092 10.0402 15.3557L12.9251 12.1824C13.4218 11.636 14.3192 11.798 14.5935 12.4837L14.6093 12.5232C14.8539 13.1347 14.7817 13.8274 14.4164 14.3754L13.5247 15.7129C13.2303 16.1545 13.3322 16.7492 13.7568 17.0676L15 18'
                stroke={color}
                strokeWidth={2}
                strokeLinecap='round'
            />
        </svg>
    );
};

export default ReferralOutlineMdV2SVG;