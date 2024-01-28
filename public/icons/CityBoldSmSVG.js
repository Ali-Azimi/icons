import React from 'react';

const CityBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4.25 5C4.25 2.92893 5.92893 1.25 8 1.25C10.0711 1.25 11.75 2.92893 11.75 5C11.75 6.72887 10.58 8.18448 8.98867 8.6183C8.85101 8.65583 8.75 8.77753 8.75 8.92021V14C8.75 14.4142 8.41421 14.75 8 14.75C7.58579 14.75 7.25 14.4142 7.25 14V8.92021C7.25 8.77753 7.14899 8.65583 7.01133 8.6183C5.41996 8.18448 4.25 6.72887 4.25 5Z'
                fill={color}
            />
        </svg>
    );
};

export default CityBoldSmSVG;
