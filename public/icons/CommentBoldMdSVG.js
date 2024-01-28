import React from 'react';

const CommentBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19.84 1C20.6741 0.999901 21.4712 1.33371 22.0607 1.92349C22.6496 2.51268 22.9847 3.31004 22.9998 4.14289L23 4.16106V21.4903C23 21.7668 22.9245 22.039 22.7804 22.2767C22.6362 22.5146 22.4283 22.7094 22.1777 22.8371C21.927 22.9649 21.6449 23.0196 21.3636 22.9937C21.0823 22.9679 20.8154 22.8628 20.5926 22.6925L20.5841 22.6859L16.2655 19.3099H6C4.66766 19.3099 3.39385 18.7702 2.45771 17.8159C1.52221 16.8623 1 15.5729 1 14.2324V4.20183C1 3.35878 1.32836 2.54648 1.9188 1.94461C2.50987 1.34209 3.31566 1 4.16 1H19.84ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6ZM5 12C5 11.4477 5.44772 11 6 11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H6C5.44772 13 5 12.5523 5 12ZM19.866 9.77192L18.4285 8.98565C18.2542 8.8894 18.1106 8.74583 18.0143 8.57151L17.2281 7.13401C17.2054 7.09339 17.1724 7.05954 17.1323 7.03598C17.0922 7.01242 17.0465 7 17 7C16.9535 7 16.9078 7.01242 16.8677 7.03598C16.8276 7.05954 16.7946 7.09339 16.7719 7.13401L15.9857 8.57151C15.8894 8.74583 15.7458 8.8894 15.5715 8.98565L14.134 9.77192C14.0934 9.79456 14.0595 9.82763 14.036 9.86773C14.0124 9.90783 14 9.95349 14 10C14 10.0465 14.0124 10.0922 14.036 10.1323C14.0595 10.1724 14.0934 10.2054 14.134 10.2281L15.5715 11.0143C15.7458 11.1106 15.8894 11.2542 15.9857 11.4285L16.7719 12.866C16.7946 12.9066 16.8276 12.9405 16.8677 12.964C16.9078 12.9876 16.9535 13 17 13C17.0465 13 17.0922 12.9876 17.1323 12.964C17.1724 12.9405 17.2054 12.9066 17.2281 12.866L18.0143 11.4285C18.1106 11.2542 18.2542 11.1106 18.4285 11.0143L19.866 10.2281C19.9066 10.2054 19.9405 10.1724 19.964 10.1323C19.9876 10.0922 20 10.0465 20 10C20 9.95349 19.9876 9.90783 19.964 9.86773C19.9405 9.82763 19.9066 9.79456 19.866 9.77192Z'
                fill={color}
            />
        </svg>
    );
};

export default CommentBoldMdSVG;