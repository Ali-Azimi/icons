import React from 'react';

const ImageEditBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12.0607 1.83686C12.2775 1.62112 12.5709 1.5 12.8767 1.5C13.1826 1.5 13.476 1.62112 13.6928 1.83686L13.6936 1.83771L14.1532 2.29732C14.2615 2.40351 14.3479 2.52999 14.4074 2.66957C14.4673 2.81027 14.4988 2.96147 14.5 3.11439C14.5011 3.26732 14.472 3.41897 14.4141 3.56057C14.3563 3.70216 14.271 3.83088 14.1631 3.93927L11.2844 6.81799C11.1362 6.96826 10.9493 7.07458 10.7444 7.12513L10.7434 7.12539L9.32628 7.47967C9.21527 7.50781 9.09884 7.50673 8.98834 7.47651C8.87719 7.44611 8.77582 7.38726 8.69427 7.30572C8.61268 7.22413 8.55388 7.12275 8.5235 7.01166C8.49329 6.9012 8.49218 6.78478 8.52033 6.67373L8.87461 5.2566L8.87489 5.25547C8.92545 5.05061 9.03174 4.86375 9.18199 4.71561L12.0607 1.83686Z'
                fill={color}
            />
            <path
                d='M4 4.75C3.30964 4.75 2.75 5.30964 2.75 6V7.86778C3.86497 6.945 5.54417 7.03911 6.54406 8.15009L7.77028 9.51256C7.89305 9.64897 8.10695 9.64897 8.22972 9.51256C8.90098 8.76672 10.051 8.70971 10.7928 9.38551L12.5051 10.9457C12.6611 11.0878 12.75 11.289 12.75 11.5V12C12.75 13.5188 11.5188 14.7501 10 14.7501H4C2.72799 14.7501 1.6577 13.8864 1.34347 12.7136C1.32941 12.661 1.31686 12.6079 1.30587 12.5542C1.29442 12.4983 1.28467 12.4417 1.27668 12.3846C1.25909 12.2589 1.25 12.1305 1.25 12V6C1.25 4.48122 2.48122 3.25 4 3.25H7V4.75H4Z'
                fill={color}
            />
        </svg>
    );
};

export default ImageEditBoldSmSVG;
