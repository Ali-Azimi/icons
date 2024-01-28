import React from 'react';

const ClipboardAddOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.5 3C5.5 1.89543 6.39543 1 7.5 1H13.5C14.6046 1 15.5 1.89543 15.5 3H17C17.7956 3 18.5587 3.31607 19.1213 3.87868C19.6839 4.44129 20 5.20435 20 6V12.64C20 13.1923 19.5523 13.64 19 13.64C18.4477 13.64 18 13.1923 18 12.64V6C18 5.73478 17.8946 5.48043 17.7071 5.29289C17.5196 5.10536 17.2652 5 17 5H15.5C15.5 5.54789 15.2797 6.04433 14.9228 6.40555L14.9142 6.41421L14.9056 6.42282C14.5443 6.77969 14.0479 7 13.5 7H7.5C6.95099 7 6.45365 6.77879 6.09224 6.42064L6.08579 6.41421L6.07718 6.40555C5.72031 6.04433 5.5 5.54789 5.5 5H4C3.73478 5 3.48043 5.10536 3.29289 5.29289C3.10536 5.48043 3 5.73478 3 6V17.64C3 18.5311 3.354 19.3858 3.98411 20.0159C4.61424 20.646 5.46887 21 6.36 21H12.64C13.1923 21 13.64 21.4477 13.64 22C13.64 22.5523 13.1923 23 12.64 23H6.36C4.93844 23 3.5751 22.4353 2.5699 21.4301C1.5647 20.4249 1 19.0616 1 17.64V6C1 5.20435 1.31607 4.44129 1.87868 3.87868C2.44129 3.31607 3.20435 3 4 3H5.5ZM13.5 3V5H7.5V3H13.5Z'
                fill={color}
            />
            <path
                d='M16 18.5C15.4477 18.5 15 18.9477 15 19.5C15 20.0523 15.4477 20.5 16 20.5H17.5V22C17.5 22.5523 17.9477 23 18.5 23C19.0523 23 19.5 22.5523 19.5 22V20.5H21C21.5523 20.5 22 20.0523 22 19.5C22 18.9477 21.5523 18.5 21 18.5H19.5V17C19.5 16.4477 19.0523 16 18.5 16C17.9477 16 17.5 16.4477 17.5 17V18.5H16Z'
                fill={color}
            />
        </svg>
    );
};

export default ClipboardAddOutlineMdSVG;
