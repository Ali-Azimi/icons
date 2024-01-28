import React from 'react';

const AccountBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M12 1C9.23858 1 7 3.23858 7 6C7 8.76142 9.23858 11 12 11C14.7614 11 17 8.76142 17 6C17 3.23858 14.7614 1 12 1Z' fill={color} />
            <path
                d='M9.42821 12.5127C8.80301 12.2656 7.92737 12.0076 7.00916 12.2583C6.37006 12.4328 5.75427 12.694 5.17887 13.037C4.04468 13.7129 3.10847 14.6817 2.4632 15.8429C2.01378 16.6386 1.88578 17.579 2.10382 18.467C2.32231 19.3568 2.87296 20.1307 3.64616 20.6202L3.65447 20.6254C6.16869 22.183 9.05598 23.0051 12 23C14.944 23.0051 17.8313 22.183 20.3455 20.6254L20.3538 20.6202C21.127 20.1307 21.6777 19.3568 21.8962 18.467C22.1142 17.579 21.9862 16.6387 21.5368 15.8429C20.8915 14.6817 19.9553 13.7129 18.8211 13.037C18.2457 12.694 17.6299 12.4328 16.9908 12.2583C16.0726 12.0076 15.197 12.2656 14.5718 12.5127C13.777 12.8269 12.9099 13 12 13C11.0901 13 10.223 12.8269 9.42821 12.5127Z'
                fill={color}
            />
        </svg>
    );
};

export default AccountBoldMdSVG;
