import React from 'react';

const WifiOffOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.3536 3.35355C13.5488 3.15829 13.5488 2.84171 13.3536 2.64645C13.1583 2.45118 12.8417 2.45118 12.6464 2.64645L11.1805 4.11235C10.1926 3.71694 9.1207 3.5 8 3.5C5.50893 3.5 3.25897 4.57184 1.6362 6.29304C1.4546 6.48565 1.4546 6.78643 1.6362 6.97904L4.87674 10.4162L2.64645 12.6464C2.45118 12.8417 2.45118 13.1583 2.64645 13.3536C2.84171 13.5488 3.15829 13.5488 3.35355 13.3536L13.3536 3.35355ZM5.58415 9.70874L2.69637 6.64578C4.11009 5.30765 5.96829 4.5 8 4.5C8.83627 4.5 9.64314 4.63683 10.4017 4.89117L5.58415 9.70874Z'
                fill={color}
            />
            <path
                d='M14.3638 6.29304C13.999 5.90611 13.6025 5.552 13.1787 5.23551L12.4633 5.95087C12.7579 6.16264 13.0386 6.39489 13.3036 6.64578L8 12.2711L7.09887 11.3153L6.39146 12.0228L7.6362 13.343C7.73067 13.4432 7.86229 13.5 8 13.5C8.13771 13.5 8.26933 13.4432 8.3638 13.343L14.3638 6.97904C14.5454 6.78643 14.5454 6.48565 14.3638 6.29304Z'
                fill={color}
            />
        </svg>
    );
};

export default WifiOffOutlineSmSVG;
