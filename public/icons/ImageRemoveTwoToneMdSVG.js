import React from 'react';

const ImageRemoveTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 6.5C1 3.46243 3.46243 1 6.5 1H17.5C20.5376 1 23 3.46243 23 6.5V17.5C23 20.5376 20.5376 23 17.5 23H6.5C3.46243 23 1 20.5376 1 17.5V6.5Z'
                fill={color}
            />
            <path
                d='M22.8259 19C22.8076 18.9832 22.7897 18.9656 22.7722 18.9473L18.2778 14.244C17.8482 13.7945 17.1518 13.7945 16.7222 14.244L16.5335 14.4415C15.2447 15.7902 13.1553 15.7902 11.8665 14.4415L7.27782 9.63945C6.84824 9.1899 6.15176 9.1899 5.72218 9.63945L1 14.5812V11.3253L4.16655 8.01149C5.45528 6.66284 7.54472 6.66284 8.83345 8.01149L13.4222 12.8136C13.8518 13.2631 14.5482 13.2631 14.9778 12.8136L15.1665 12.6161C16.4553 11.2674 18.5447 11.2674 19.8335 12.6161L23 15.9298V17.5579C23 18.0559 22.9396 18.5391 22.8259 19Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.5858 2.17158C17.1953 1.78106 16.5621 1.78106 16.1716 2.17158C15.781 2.56211 15.781 3.19527 16.1716 3.5858L17.5858 5.00003L16.1716 6.41423C15.7811 6.80476 15.7811 7.43792 16.1716 7.82844C16.5621 8.21897 17.1953 8.21897 17.5858 7.82844L19 6.41424L20.4142 7.82844C20.8047 8.21896 21.4379 8.21896 21.8284 7.82844C22.2189 7.43791 22.2189 6.80475 21.8284 6.41423L20.4142 5.00003L21.8284 3.5858C22.219 3.19528 22.219 2.56211 21.8284 2.17159C21.4379 1.78107 20.8048 1.78107 20.4142 2.17159L19 3.58582L17.5858 2.17158Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ImageRemoveTwoToneMdSVG;
