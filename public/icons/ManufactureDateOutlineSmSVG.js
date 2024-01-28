import React from 'react';

const ManufactureDateOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.22541 1.96684C6.00574 1.11637 8.20347 1.42757 9.67916 2.90326C10.8592 4.0833 11.2945 5.72548 10.987 7.24547L13.725 9.98352C14.7582 11.0167 14.7582 12.6918 13.725 13.725C12.6918 14.7582 11.0167 14.7582 9.98352 13.725L7.24547 10.987C5.72548 11.2945 4.0833 10.8592 2.90326 9.67916C1.42757 8.20347 1.11637 6.00574 1.96684 4.22541C2.0368 4.07896 2.1735 3.97557 2.33348 3.94814C2.49345 3.9207 2.65679 3.97262 2.77156 4.08739L4.40332 5.71915L5.39019 5.39019L5.71915 4.40332L4.08739 2.77156C3.97262 2.65679 3.9207 2.49345 3.94814 2.33348C3.97557 2.1735 4.07896 2.0368 4.22541 1.96684ZM5.34833 2.61829L6.64476 3.91472C6.77868 4.04864 6.82544 4.24672 6.76555 4.42639L6.25982 5.94359C6.21005 6.09289 6.09289 6.21005 5.94359 6.25982L4.42639 6.76555C4.24672 6.82544 4.04864 6.77868 3.91472 6.64476L2.61829 5.34833C2.29739 6.60343 2.62864 7.99034 3.61036 8.97205C4.60221 9.9639 6.00716 10.292 7.27346 9.95379C7.4459 9.90774 7.62981 9.9571 7.75601 10.0833L10.6906 13.0179C11.3333 13.6606 12.3753 13.6606 13.0179 13.0179C13.6606 12.3753 13.6606 11.3333 13.0179 10.6906L10.0833 7.75601C9.9571 7.62981 9.90774 7.4459 9.95379 7.27346C10.292 6.00716 9.9639 4.60221 8.97205 3.61036C7.99034 2.62864 6.60343 2.29739 5.34833 2.61829Z'
                fill={color}
            />
        </svg>
    );
};

export default ManufactureDateOutlineSmSVG;
