import React from 'react';

const ExpandOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 3C1 1.89543 1.89543 1 3 1H7C7.55228 1 8 1.44772 8 2C8 2.55228 7.55228 3 7 3H4.41421L8.70711 7.29289C9.09763 7.68342 9.09763 8.31658 8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L3 4.41421V7C3 7.55228 2.55228 8 2 8C1.44772 8 1 7.55228 1 7V3Z'
                fill={color}
            />
            <path
                d='M23 3C23 1.89543 22.1046 1 21 1H17C16.4477 1 16 1.44772 16 2C16 2.55228 16.4477 3 17 3H19.5858L15.2929 7.29289C14.9024 7.68342 14.9024 8.31658 15.2929 8.70711C15.6834 9.09763 16.3166 9.09763 16.7071 8.70711L21 4.41421V7C21 7.55228 21.4477 8 22 8C22.5523 8 23 7.55228 23 7V3Z'
                fill={color}
            />
            <path
                d='M23 21C23 22.1046 22.1046 23 21 23H17C16.4477 23 16 22.5523 16 22C16 21.4477 16.4477 21 17 21H19.5858L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L21 19.5858V17C21 16.4477 21.4477 16 22 16C22.5523 16 23 16.4477 23 17V21Z'
                fill={color}
            />
            <path
                d='M3 23C1.89543 23 1 22.1046 1 21V17C1 16.4477 1.44772 16 2 16C2.55229 16 3 16.4477 3 17L3 19.5858L7.29289 15.2929C7.68342 14.9024 8.31658 14.9024 8.70711 15.2929C9.09763 15.6834 9.09763 16.3166 8.70711 16.7071L4.41421 21H7C7.55228 21 8 21.4477 8 22C8 22.5523 7.55228 23 7 23H3Z'
                fill={color}
            />
        </svg>
    );
};

export default ExpandOutlineMdSVG;
