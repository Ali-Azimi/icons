import React from 'react';

const VisitExpertBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.5 13C8.27293 13 8.05262 13.0773 7.87531 13.2191L5.64922 15H4C2.89543 15 2 15.8954 2 17V17.5585C2 18.8498 2.82629 19.9962 4.05132 20.4045L10.7351 22.6325C11.5562 22.9061 12.4438 22.9061 13.2649 22.6325L19.9487 20.4045C21.1737 19.9962 22 18.8498 22 17.5585V17C22 15.8954 21.1046 15 20 15H18.3508L16.1247 13.2191C15.9474 13.0773 15.7271 13 15.5 13H8.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 3C6 1.89543 6.89543 1 8 1H16C17.1046 1 18 1.89543 18 3V4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H18C18 9.31371 15.3137 12 12 12C8.68629 12 6 9.31371 6 6V3ZM8 6C8 8.20914 9.79086 10 12 10C14.2091 10 16 8.20914 16 6H8Z'
                fill={color}
            />
        </svg>
    );
};

export default VisitExpertBoldMdSVG;
