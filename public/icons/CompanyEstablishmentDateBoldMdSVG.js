import React from 'react';

const CompanyEstablishmentDateBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4.5 3.5C4.5 3.22386 4.27614 3 4 3C2.34315 3 1 4.34315 1 6V17C1 20.3137 3.68629 23 7 23H17C20.3137 23 23 20.3137 23 17V13C23 12.4477 22.5523 12 22 12H5V10H22C22.5523 10 23 9.55228 23 9V6C23 4.34315 21.6569 3 20 3C19.7239 3 19.5 3.22386 19.5 3.5V5C19.5 6.38071 18.3807 7.5 17 7.5C15.6193 7.5 14.5 6.38071 14.5 5V4C14.5 3.44772 14.0523 3 13.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V5C9.5 6.38071 8.38071 7.5 7 7.5C5.61929 7.5 4.5 6.38071 4.5 5V3.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C7.55228 1 8 1.44772 8 2V5C8 5.55229 7.55228 6 7 6C6.44772 6 6 5.55229 6 5V2C6 1.44772 6.44772 1 7 1Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 1C17.5523 1 18 1.44772 18 2V5C18 5.55229 17.5523 6 17 6C16.4477 6 16 5.55229 16 5V2C16 1.44772 16.4477 1 17 1Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyEstablishmentDateBoldMdSVG;
