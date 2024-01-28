import React from 'react';

const DamageMoneyOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.7236 1.5529C11.9706 1.67639 12.0707 1.97673 11.9472 2.22372L10.809 4.50011H13C13.1733 4.50011 13.3342 4.58984 13.4253 4.73724C13.5164 4.88465 13.5247 5.06872 13.4472 5.22372L11.9472 8.22372C11.8237 8.47071 11.5234 8.57082 11.2764 8.44732C11.0294 8.32383 10.9293 8.02349 11.0528 7.7765L12.191 5.50011H10C9.82671 5.50011 9.66578 5.41038 9.57468 5.26297C9.48357 5.11557 9.47529 4.9315 9.55279 4.7765L11.0528 1.7765C11.1763 1.52951 11.4766 1.4294 11.7236 1.5529Z'
                fill={color}
            />
            <path
                d='M2.5 2.00012C2.5 1.72398 2.72386 1.50012 3 1.50012H7.57143C7.84757 1.50012 8.07143 1.72398 8.07143 2.00012C8.07143 2.27626 7.84757 2.50012 7.57143 2.50012H3.5V13.5001H10.5V10.5001C10.5 10.224 10.7239 10.0001 11 10.0001C11.2761 10.0001 11.5 10.224 11.5 10.5001V14.0001C11.5 14.2763 11.2761 14.5001 11 14.5001H3C2.72386 14.5001 2.5 14.2763 2.5 14.0001V2.00012Z'
                fill={color}
            />
            <path
                d='M7 9.50012C7.82843 9.50012 8.5 8.82855 8.5 8.00012C8.5 7.17169 7.82843 6.50012 7 6.50012C6.17157 6.50012 5.5 7.17169 5.5 8.00012C5.5 8.82855 6.17157 9.50012 7 9.50012Z'
                fill={color}
            />
        </svg>
    );
};

export default DamageMoneyOutlineSmSVG;