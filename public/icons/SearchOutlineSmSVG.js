import React from 'react';

const SearchOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 1.5C5.96243 1.5 3.5 3.96243 3.5 7C3.5 8.33877 3.97833 9.56582 4.7734 10.5196L1.64645 13.6465C1.45118 13.8418 1.45118 14.1584 1.64645 14.3536C1.84171 14.5489 2.15829 14.5489 2.35355 14.3536L5.48051 11.2267C6.43425 12.0217 7.66127 12.5 9 12.5C12.0376 12.5 14.5 10.0376 14.5 7C14.5 3.96243 12.0376 1.5 9 1.5ZM4.5 7C4.5 4.51472 6.51472 2.5 9 2.5C11.4853 2.5 13.5 4.51472 13.5 7C13.5 9.48528 11.4853 11.5 9 11.5C6.51472 11.5 4.5 9.48528 4.5 7Z'
                fill={color}
            />
        </svg>
    );
};

export default SearchOutlineSmSVG;
