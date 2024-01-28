import React from 'react';

const InstallmentAmountBoldSmV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.4886 3.7154C11.836 2.65743 10.9673 1.57192 9.84821 1.73422L5.72846 2.33174C4.74218 2.47478 4.17542 3.521 4.55935 4.43053L5.06475 5.62778C5.09602 5.70185 5.1686 5.75 5.24901 5.75H10.6758C10.7622 5.75 10.8389 5.69449 10.8658 5.61239L11.4886 3.7154Z'
                fill={color}
            />
            <path
                d='M7.95 7.25C7.83954 7.25 7.75 7.33954 7.75 7.45V9C7.75 9.41421 7.41421 9.75 7 9.75C6.58579 9.75 6.25 9.41421 6.25 9V7.45C6.25 7.33954 6.16046 7.25 6.05 7.25H5C4.95566 7.25 4.91264 7.26901 4.88712 7.30528L3.83027 8.80745C3.29832 9.56354 2.96072 10.4417 2.84735 11.3624L2.78516 11.8676C2.5998 13.3731 3.75666 14.7184 5.27237 14.7184H10.7589C12.2746 14.7184 13.4314 13.3731 13.2461 11.8676L13.1839 11.3624C13.0705 10.4417 12.7329 9.56354 12.201 8.80745L11.1586 7.32578C11.1229 7.27511 11.062 7.25 11 7.25H7.95Z'
                fill={color}
            />
        </svg>
    );
};

export default InstallmentAmountBoldSmV2SVG;