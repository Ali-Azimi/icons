import React from 'react';

const AccountAddOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1.5C5.61929 1.5 4.5 2.61929 4.5 4C4.5 5.38071 5.61929 6.5 7 6.5C8.38071 6.5 9.5 5.38071 9.5 4C9.5 2.61929 8.38071 1.5 7 1.5ZM5.5 4C5.5 3.17157 6.17157 2.5 7 2.5C7.82843 2.5 8.5 3.17157 8.5 4C8.5 4.82843 7.82843 5.5 7 5.5C6.17157 5.5 5.5 4.82843 5.5 4Z'
                fill={color}
            />
            <path
                d='M8.93768 8.43311C9.17684 8.29506 9.2588 7.98926 9.12074 7.75011C8.98268 7.51096 8.67689 7.429 8.43774 7.56706C7.92011 7.86586 7.32996 8.03443 6.70305 8.03443C6.28116 8.03443 5.87657 7.95812 5.49979 7.81766C5.09324 7.66611 4.49685 7.47212 3.89969 7.68286C3.63449 7.77646 3.37893 7.90096 3.1376 8.05459C2.54745 8.43029 2.06421 8.96621 1.73262 9.60368C1.50633 10.0315 1.4431 10.5336 1.55188 11.0069C1.6609 11.4811 1.93755 11.9022 2.33708 12.1724L2.34126 12.1752C3.65287 13.0432 5.16237 13.5032 6.70406 13.5001C6.9802 13.4995 7.20361 13.2752 7.20305 12.9991C7.2025 12.7229 6.97819 12.4995 6.70205 12.5001C5.3634 12.5028 4.04665 12.104 2.89544 11.3428C2.71942 11.2231 2.58221 11.0254 2.52647 10.7828C2.47045 10.5391 2.50455 10.2825 2.61707 10.0703L2.61903 10.0666C2.87331 9.57715 3.23903 9.17546 3.67463 8.89815C3.85256 8.78488 4.03968 8.69391 4.23249 8.62586C4.4572 8.54656 4.7404 8.6018 5.15049 8.75468C5.63661 8.93589 6.15936 9.03443 6.70305 9.03443C7.51266 9.03443 8.2744 8.816 8.93768 8.43311Z'
                fill={color}
            />
            <path
                d='M8.5 11.5C8.5 11.2239 8.72386 11 9 11H11V9C11 8.72386 11.2239 8.5 11.5 8.5C11.7761 8.5 12 8.72386 12 9V11H14C14.2761 11 14.5 11.2239 14.5 11.5C14.5 11.7761 14.2761 12 14 12H12V14C12 14.2761 11.7761 14.5 11.5 14.5C11.2239 14.5 11 14.2761 11 14V12H9C8.72386 12 8.5 11.7761 8.5 11.5Z'
                fill={color}
            />
        </svg>
    );
};

export default AccountAddOutlineSmSVG;
