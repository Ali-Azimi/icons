import React from 'react';

const ElevatorResidentialBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 2.25C5.41421 2.25 5.75 2.58579 5.75 3V3.25822C5.75 3.51257 6.04666 3.65152 6.24205 3.48869L7.51988 2.42383C7.79801 2.19206 8.20202 2.19206 8.48016 2.42383L14.4802 7.42383C14.7984 7.68901 14.8414 8.16193 14.5762 8.48014C14.311 8.79835 13.8381 8.84134 13.5199 8.57617L13.2421 8.34464C13.0467 8.18181 12.75 8.32076 12.75 8.57511V12.95C12.75 13.1157 12.8843 13.25 13.05 13.25H14C14.4142 13.25 14.75 13.5858 14.75 14C14.75 14.4142 14.4142 14.75 14 14.75H12.0021L12 14.75H4L3.99791 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H2.95C3.11569 13.25 3.25 13.1157 3.25 12.95V8.57514C3.25 8.32079 2.95334 8.18184 2.75794 8.34468L2.48016 8.57617C2.16195 8.84134 1.68903 8.79835 1.42385 8.48014C1.15868 8.16193 1.20167 7.68901 1.51988 7.42383L4.14206 5.23869C4.21045 5.18169 4.25 5.09726 4.25 5.00822V3C4.25 2.58579 4.58579 2.25 5 2.25Z'
                fill={color}
            />
        </svg>
    );
};

export default ElevatorResidentialBoldSmSVG;