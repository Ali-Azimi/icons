import React from 'react';

const FlagBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.29671 1.927C6.20115 1.02433 3.79885 1.02433 1.70329 1.927C1.42821 2.04549 1.25 2.31629 1.25 2.61581V14C1.25 14.4142 1.58579 14.75 2 14.75C2.41421 14.75 2.75 14.4142 2.75 14V9.86287L3.79671 9.412C4.56039 9.08305 5.43961 9.08305 6.20329 9.412L7.76927 10.0865C9.8229 10.9712 12.1771 10.9712 14.2307 10.0865C14.5295 9.95783 14.75 9.6595 14.75 9.30064V2.77646C14.75 2.10079 14.0586 1.77394 13.549 1.99347C11.9303 2.69073 10.0697 2.69073 8.45103 1.99347L8.29671 1.927Z'
                fill={color}
            />
        </svg>
    );
};

export default FlagBoldSmSVG;
