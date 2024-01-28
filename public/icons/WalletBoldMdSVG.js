import React from 'react';

const WalletBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M17 15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15C15 14.4477 15.4477 14 16 14C16.5523 14 17 14.4477 17 15Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2 7C1.44772 7 1 7.44772 1 8V18C1 19.3261 1.52678 20.5979 2.46447 21.5355C3.40215 22.4732 4.67392 23 6 23H19.15C19.393 23 19.6335 22.9521 19.858 22.8592C20.0824 22.7662 20.2864 22.6299 20.4581 22.4581C20.6299 22.2864 20.7662 22.0824 20.8592 21.858C20.9521 21.6335 21 21.3929 21 21.15V18.4541C21.2944 18.2837 21.5683 18.0755 21.8141 17.8325C22.5721 17.0833 23 16.0646 23 15C23 13.9354 22.5721 12.9167 21.8141 12.1675C21.5683 11.9245 21.2944 11.7163 21 11.5459V8.85C21 8.60705 20.9521 8.36649 20.8592 8.14203C20.7662 7.91759 20.6299 7.71365 20.4581 7.54185C20.2864 7.37006 20.0824 7.23379 19.858 7.14082C19.6335 7.04785 19.3929 7 19.15 7H2ZM20.4081 16.4101C20.0273 16.7865 19.5085 17 18.9651 17H14V13H18.9651C19.5085 13 20.0273 13.2135 20.4081 13.5899C20.7885 13.9658 21 14.4733 21 15C21 15.5267 20.7885 16.0342 20.4081 16.4101Z'
                fill={color}
            />
            <path
                d='M13.9697 1.00005H3.92929C3.80774 0.998732 3.68712 1.02129 3.57443 1.06643C3.46174 1.11157 3.35921 1.17839 3.27279 1.26302C3.18636 1.34766 3.11775 1.44842 3.07092 1.55948C3.0241 1.67054 2.99999 1.7897 3 1.91005V4C3 4.55228 3.44772 5 4 5H16C16.5523 5 17 4.5523 17 4.00003C17 3.60607 16.9216 3.21596 16.7693 2.85199C16.617 2.48801 16.3938 2.1573 16.1124 1.87873C15.8311 1.60015 15.497 1.37918 15.1293 1.22841C14.7617 1.07765 14.3676 1.00005 13.9697 1.00005Z'
                fill={color}
            />
        </svg>
    );
};

export default WalletBoldMdSVG;