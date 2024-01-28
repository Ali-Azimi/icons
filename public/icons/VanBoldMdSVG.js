import React from 'react';

const VanBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13 5H5C2.95985 5 1.27643 6.52736 1.03082 8.50099C0.996722 8.77502 1.22386 9 1.5 9H12.4637C12.8087 9 13.0515 8.65504 13.016 8.31179C13.0054 8.2093 13 8.10529 13 8V5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.5 11C1.22386 11 1 11.2239 1 11.5V14C1 15.6569 2.34315 17 4 17H4.17071C4.58254 18.1652 5.69378 19 7 19C8.30622 19 9.41746 18.1652 9.82929 17H14.1707C14.5825 18.1652 15.6938 19 17 19C18.3062 19 19.4175 18.1652 19.8293 17H20C21.6569 17 23 15.6569 23 14V12.4031C23 12.0084 22.9533 11.6178 22.8626 11.2389C22.8252 11.0826 22.6607 11 22.5 11H1.5ZM7 17C7.55228 17 8 16.5523 8 16C8 15.4477 7.55228 15 7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17ZM18 16C18 16.5523 17.5523 17 17 17C16.4477 17 16 16.5523 16 16C16 15.4477 16.4477 15 17 15C17.5523 15 18 15.4477 18 16Z'
                fill={color}
            />
            <path
                d='M20.6403 9C21.0596 9 21.2927 8.51503 21.0307 8.18765L19.9818 6.87652C19.033 5.69045 17.5964 5 16.0775 5H15V8C15 8.55228 15.4477 9 16 9H20.6403Z'
                fill={color}
            />
        </svg>
    );
};

export default VanBoldMdSVG;