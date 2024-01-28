import React from 'react';

const ReturnNoneRightOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.5858 11H8.5C7.11929 11 6 12.1193 6 13.5C6 14.8807 7.11929 16 8.5 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H8.5C6.01472 18 4 15.9853 4 13.5C4 11.0147 6.01472 9 8.5 9H16.5858L15.2929 7.70711C14.9024 7.31658 14.9024 6.68342 15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289L19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L16.7071 13.7071Z'
                fill={color}
            />
        </svg>
    );
};

export default ReturnNoneRightOutlineMdSVG;