import React from 'react';

const ClipboardTickTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.5 2H14.5C15.0523 2 15.5 2.44772 15.5 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V17.64C21 19.0616 20.4353 20.4249 19.4301 21.4301C18.4249 22.4353 17.0616 23 15.64 23H7.36C5.93844 23 4.5751 22.4353 3.5699 21.4301C2.5647 20.4249 2 19.0616 2 17.64V6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H7.5C7.5 2.44772 7.94772 2 8.5 2Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.6965 11.2824C16.0928 11.6671 16.1022 12.3002 15.7176 12.6965L12.5223 15.9886C11.7604 16.7736 10.5092 16.8008 9.71386 16.0497L8.31338 14.727C7.91186 14.3478 7.89377 13.7149 8.27299 13.3134C8.6522 12.9119 9.28511 12.8938 9.68662 13.273L11.0871 14.5957L14.2824 11.3035C14.6671 10.9072 15.3002 10.8978 15.6965 11.2824Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.5 3C6.5 1.89543 7.39543 1 8.5 1H14.5C15.6046 1 16.5 1.89543 16.5 3V5C16.5 6.10457 15.6046 7 14.5 7H8.5C7.39543 7 6.5 6.10457 6.5 5V3ZM14.5 3H8.5V5H14.5V3Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ClipboardTickTwoToneMdSVG;
