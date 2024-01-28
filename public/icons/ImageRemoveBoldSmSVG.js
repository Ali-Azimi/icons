import React from 'react';

const ImageRemoveBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967C9.17678 1.76256 9.17678 2.23744 9.46967 2.53033L10.9393 4L9.46967 5.46967C9.17678 5.76256 9.17678 6.23744 9.46967 6.53033C9.76256 6.82322 10.2374 6.82322 10.5303 6.53033L12 5.06066L13.4697 6.53033C13.7626 6.82322 14.2374 6.82322 14.5303 6.53033C14.8232 6.23744 14.8232 5.76256 14.5303 5.46967L13.0607 4L14.5303 2.53033C14.8232 2.23744 14.8232 1.76256 14.5303 1.46967C14.2374 1.17678 13.7626 1.17678 13.4697 1.46967L12 2.93934L10.5303 1.46967Z'
                fill={color}
            />
            <path
                d='M2.75 6C2.75 5.30964 3.30964 4.75 4 4.75H6.25C6.66421 4.75 7 4.41421 7 4C7 3.58579 6.66421 3.25 6.25 3.25H4C2.48122 3.25 1.25 4.48122 1.25 6V12.0001C1.25 12.0475 1.2512 12.0947 1.25358 12.1415C1.32717 13.5946 2.52864 14.7501 4 14.7501H10C11.5188 14.7501 12.75 13.5188 12.75 12V11C12.75 10.7858 12.6584 10.5819 12.4983 10.4396L10.7483 8.884C10.0364 8.25121 8.96362 8.25121 8.25173 8.884C8.10817 9.01161 7.89183 9.01161 7.74827 8.884L6.327 7.62065C5.31042 6.71703 3.79105 6.69503 2.75 7.55467V6Z'
                fill={color}
            />
        </svg>
    );
};

export default ImageRemoveBoldSmSVG;
