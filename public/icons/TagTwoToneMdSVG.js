import React from 'react';

const TagTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13.0361 1C12.2175 1 11.4325 1.32517 10.8536 1.90399L1.90399 10.8536C0.698671 12.059 0.698668 14.0132 1.90399 15.2185L8.7815 22.096C9.98682 23.3013 11.941 23.3013 13.1464 22.096L22.096 13.1464C22.6748 12.5675 23 11.7825 23 10.9639V4.08642C23 2.38184 21.6182 1 19.9136 1H13.0361Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19 8.5C19 10.433 17.433 12 15.5 12C13.567 12 12 10.433 12 8.5C12 6.567 13.567 5 15.5 5C17.433 5 19 6.567 19 8.5ZM15.5 10C16.3284 10 17 9.32843 17 8.5C17 7.67157 16.3284 7 15.5 7C14.6716 7 14 7.67157 14 8.5C14 9.32843 14.6716 10 15.5 10Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default TagTwoToneMdSVG;
