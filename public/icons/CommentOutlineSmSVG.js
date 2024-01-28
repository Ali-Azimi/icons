import React from 'react';

const CommentOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 4C7.87218 4 7.74668 4.03414 7.63648 4.0989C7.52627 4.16365 7.43535 4.25665 7.37314 4.36832L6.71661 5.5686C6.68209 5.63081 6.63081 5.68209 6.5686 5.71661L5.37173 6.37125L5.36832 6.37315C5.25666 6.43537 5.16365 6.52627 5.0989 6.63648C5.03414 6.74668 5 6.87218 5 7C5 7.12782 5.03414 7.25332 5.0989 7.36352C5.16365 7.47373 5.25666 7.56465 5.36832 7.62686L6.56861 8.28339C6.63082 8.31791 6.68248 8.36989 6.717 8.43209L7.37125 9.62827L7.37315 9.63168C7.43536 9.74334 7.52627 9.83635 7.63648 9.9011C7.74668 9.96586 7.87218 10 8 10C8.12782 10 8.25332 9.96586 8.36352 9.9011C8.47373 9.83635 8.56465 9.74334 8.62686 9.63168L9.2834 8.43137C9.31792 8.36918 9.3699 8.31751 9.43209 8.283L10.6283 7.62875L10.6317 7.62685C10.7433 7.56464 10.8363 7.47373 10.9011 7.36352C10.9659 7.25332 11 7.12782 11 7C11 6.87218 10.9659 6.74668 10.9011 6.63648C10.8363 6.52627 10.7433 6.43535 10.6317 6.37314L9.43139 5.71661C9.36918 5.68209 9.31791 5.63082 9.28339 5.56861L8.62875 4.37173L8.62685 4.36832C8.56464 4.25666 8.47373 4.16365 8.36352 4.0989C8.25332 4.03414 8.12782 4 8 4ZM8.40662 6.04953L8 5.30612L7.59338 6.04953L7.59242 6.05128C7.46665 6.27906 7.27906 6.46665 7.05128 6.59242L7.04953 6.59338L6.30612 7L7.04953 7.40662L7.05128 7.40758C7.27905 7.53335 7.46665 7.72094 7.59242 7.94872L7.59338 7.95047L8 8.69388L8.40662 7.95047L8.40758 7.94872C8.53335 7.72094 8.72094 7.53335 8.94872 7.40758L8.95047 7.40662L9.69388 7L8.95047 6.59338L8.94872 6.59242C8.72094 6.46665 8.53335 6.27905 8.40758 6.05128L8.40662 6.04953Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.9657 2.02479C13.6305 1.68948 13.1777 1.49994 12.704 1.5H3.296C2.81654 1.5 2.35871 1.69424 2.02266 2.0368C1.68694 2.37902 1.5 2.84118 1.5 3.3211V9.33945C1.5 10.1178 1.80325 10.8662 2.34601 11.4195C2.8891 11.9731 3.62774 12.2859 4.4 12.2859H10.5938L13.212 14.3328L13.2163 14.3361C13.3351 14.4269 13.4774 14.4829 13.6273 14.4967C13.7772 14.5104 13.9276 14.4813 14.0612 14.4132C14.1948 14.3451 14.3058 14.2412 14.3827 14.1142C14.4597 13.9873 14.5 13.8419 14.5 13.6942L14.5001 3.29664L14.4999 3.28755C14.4913 2.81344 14.3005 2.3598 13.9657 2.02479ZM12.7041 2.5C12.9096 2.49996 13.1088 2.58207 13.2584 2.73172C13.4074 2.88076 13.495 3.08505 13.5 3.30168V13.2886L11.0739 11.392C10.986 11.3233 10.8776 11.2859 10.766 11.2859H4.4C3.89922 11.2859 3.41696 11.0832 3.05987 10.7192C2.70246 10.3549 2.5 9.85875 2.5 9.33945V3.3211C2.5 3.10027 2.58615 2.89037 2.73652 2.73709C2.88657 2.58413 3.08802 2.5 3.296 2.5H12.7041Z'
                fill={color}
            />
        </svg>
    );
};

export default CommentOutlineSmSVG;