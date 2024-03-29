import React from 'react';

const DamagePlanOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C5.89543 1 5 1.89543 5 3H3C1.89543 3 1 3.89543 1 5L1 21C1 22.1046 1.89543 23 3 23H13C13.5523 23 14 22.5523 14 22C14 21.4477 13.5523 21 13 21H3L3 5H5V6C5 7.10457 5.89543 8 7 8H12C13.1046 8 14 7.10457 14 6V5H16V9C16 9.55229 16.4477 10 17 10C17.5523 10 18 9.55229 18 9V5C18 3.89543 17.1046 3 16 3H14C14 1.89543 13.1046 1 12 1H7ZM7 3H12V6H7V3Z'
                fill={color}
            />
            <path
                d='M18.9472 11.1058C19.4412 11.3528 19.6414 11.9535 19.3944 12.4474L17.618 16.0002H21C21.3466 16.0002 21.6684 16.1797 21.8507 16.4745C22.0329 16.7693 22.0494 17.1374 21.8944 17.4474L19.3944 22.4474C19.1474 22.9414 18.5468 23.1416 18.0528 22.8946C17.5588 22.6477 17.3586 22.047 17.6056 21.553L19.382 18.0002H16C15.6534 18.0002 15.3316 17.8208 15.1494 17.5259C14.9671 17.2311 14.9506 16.863 15.1056 16.553L17.6056 11.553C17.8526 11.059 18.4532 10.8588 18.9472 11.1058Z'
                fill={color}
            />
        </svg>
    );
};

export default DamagePlanOutlineMdSVG;
