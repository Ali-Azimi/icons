import React from 'react';

const ArrowCircleDownBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 23C5.92486 23 0.999998 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929L11 13.5858V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13.5858L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowCircleDownBoldMdSVG;
