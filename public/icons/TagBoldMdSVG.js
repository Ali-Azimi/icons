import React from 'react';

const TagBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.8536 1.90399C11.4325 1.32517 12.2175 1 13.0361 1H19.9136C21.6182 1 23 2.38184 23 4.08642V10.9639C23 11.7825 22.6748 12.5675 22.096 13.1464L13.1464 22.096C11.941 23.3013 9.98682 23.3013 8.7815 22.096L1.90399 15.2185C0.698668 14.0132 0.698671 12.059 1.90399 10.8536L10.8536 1.90399ZM18 8.5C18 9.88071 16.8807 11 15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5Z'
                fill={color}
            />
        </svg>
    );
};

export default TagBoldMdSVG;
