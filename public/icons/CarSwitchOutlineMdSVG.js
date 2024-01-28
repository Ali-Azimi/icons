import React from 'react';

const CarSwitchOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M5 7C5 6.44772 5.44772 6 6 6H9C9.55229 6 10 6.44772 10 7C10 7.55228 9.55229 8 9 8H6C5.44772 8 5 7.55228 5 7Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 12H3C1.89543 12 1 11.1046 1 10V6C1 3.23858 3.23858 1 6 1H9C11.7614 1 14 3.23858 14 6V10C14 11.1046 13.1046 12 12 12H11V20.9909C11 22.6615 9.0678 23.6196 7.74788 22.5561L5.12942 20.4462C4.28793 19.7682 4.13539 18.5444 4.77948 17.6795L5.25321 17.0433L4.39794 15.8947C4.13924 15.5472 4 15.1256 4 14.6931V12ZM6 3L9 3C10.6569 3 12 4.34315 12 6V10H3L3 6C3 4.34315 4.34315 3 6 3ZM6 12V14.6931C6 14.6964 6.00112 14.6989 6.00206 14.7002L7.30206 16.446C7.56598 16.8004 7.56598 17.2861 7.30206 17.6405L6.38361 18.8739C6.38275 18.8751 6.38233 18.8758 6.38211 18.8763C6.38196 18.8767 6.38215 18.8762 6.38211 18.8763C6.38187 18.8773 6.38131 18.8801 6.38166 18.8828C6.382 18.8855 6.38275 18.8872 6.383 18.8876L6.38428 18.8889L8.99983 20.9964L9 20.9909V12H6Z'
                fill={color}
            />
            <path
                d='M20.7812 2.28321C20.3853 1.89811 19.7522 1.90684 19.3671 2.30272C18.982 2.69859 18.9907 3.3317 19.3866 3.7168C21.5378 5.80944 21.5378 9.19056 19.3866 11.2832C18.9907 11.6683 18.982 12.3014 19.3671 12.6973C19.7522 13.0932 20.3853 13.1019 20.7812 12.7168C23.7396 9.83888 23.7396 5.16112 20.7812 2.28321Z'
                fill={color}
            />
            <path
                d='M17.6973 5.2832C17.3014 4.8981 16.6683 4.90684 16.2832 5.30271C15.8981 5.69859 15.9068 6.33169 16.3027 6.71679C16.7507 7.15258 16.7507 7.84741 16.3027 8.2832C15.9068 8.6683 15.8981 9.3014 16.2832 9.69728C16.6683 10.0932 17.3014 10.1019 17.6973 9.71679C18.9525 8.49573 18.9525 6.50426 17.6973 5.2832Z'
                fill={color}
            />
        </svg>
    );
};

export default CarSwitchOutlineMdSVG;
