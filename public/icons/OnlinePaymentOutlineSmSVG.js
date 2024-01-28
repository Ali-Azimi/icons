import React from 'react';

const OnlinePaymentOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V8C1.5 9.38071 2.61929 10.5 4 10.5H6C6.27614 10.5 6.5 10.2761 6.5 10C6.5 9.72386 6.27614 9.5 6 9.5H4C3.17157 9.5 2.5 8.82843 2.5 8V4C2.5 3.17157 3.17157 2.5 4 2.5H11C11.8284 2.5 12.5 3.17157 12.5 4V7C12.5 7.27614 12.7239 7.5 13 7.5C13.2761 7.5 13.5 7.27614 13.5 7V4C13.5 2.61929 12.3807 1.5 11 1.5H4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.15813 7.52567C7.97846 7.46578 7.78038 7.51254 7.64646 7.64646C7.51254 7.78038 7.46578 7.97846 7.52567 8.15813L9.44567 13.9181C9.50047 14.0825 9.63648 14.2068 9.80514 14.2466C9.97379 14.2865 10.151 14.2361 10.2736 14.1136L11.12 13.2671L12.2065 14.3536C12.4017 14.5488 12.7183 14.5488 12.9136 14.3536L14.3536 12.9136C14.5488 12.7183 14.5488 12.4017 14.3536 12.2065L13.2671 11.12L14.1136 10.2736C14.2361 10.151 14.2865 9.97379 14.2466 9.80514C14.2068 9.63648 14.0825 9.50047 13.9181 9.44567L8.15813 7.52567ZM10.1385 12.8344L8.79058 8.79058L12.8344 10.1385L12.2065 10.7665C12.0112 10.9617 12.0112 11.2783 12.2065 11.4736L13.2929 12.56L12.56 13.2929L11.4736 12.2065C11.2783 12.0112 10.9617 12.0112 10.7665 12.2065L10.1385 12.8344Z'
                fill={color}
            />
        </svg>
    );
};

export default OnlinePaymentOutlineSmSVG;