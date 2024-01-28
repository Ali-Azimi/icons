import React from 'react';

const GalleryBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C3.68629 1 1 3.68629 1 7V16.9999C1 20.3137 3.68629 23 7 23H17C19.8995 23 22.3186 20.9433 22.8781 18.2092C22.958 17.8186 23 17.4142 23 17C23 17 23 17 23 17V7C23 3.68629 20.3137 1 17 1H7ZM21 14.5857V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V10.5857L4.87868 8.70705C6.05026 7.53547 7.94975 7.53548 9.12132 8.70705L13.2929 12.8786C13.6834 13.2691 14.3166 13.2691 14.7071 12.8786L14.8787 12.7071C16.0503 11.5355 17.9497 11.5355 19.1213 12.7071L21 14.5857Z'
                fill={color}
            />
        </svg>
    );
};

export default GalleryBoldMdSVG;
