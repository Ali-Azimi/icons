import React from 'react';

const BlogBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.24995 2C4.24995 1.58579 4.58574 1.25 4.99995 1.25H7.23034C7.90274 1.25 8.54497 1.5218 9.01649 2.00139C9.35704 2.34778 9.58855 2.782 9.6907 3.25H13.8C14.3247 3.25 14.75 3.67533 14.75 4.2V11.8C14.75 12.3247 14.3247 12.75 13.8 12.75H9.74995V14C9.74995 14.4142 9.41417 14.75 8.99995 14.75C8.58574 14.75 8.24995 14.4142 8.24995 14V11.2897C8.24731 11.011 8.13719 10.7466 7.94685 10.553C7.75461 10.3575 7.49662 10.25 7.23034 10.25H4.99995C4.58574 10.25 4.24995 9.91421 4.24995 9.5V2ZM8.24995 4V8.9681C7.93231 8.82584 7.58553 8.75 7.23034 8.75H5.74995V2.75H7.23034C7.49662 2.75 7.75461 2.85747 7.94685 3.053C8.13952 3.24898 8.25 3.51745 8.25 3.8V3.99137L8.24995 4Z'
                fill={color}
            />
            <path
                d='M7.00005 11.5V12.75H2.2C1.67533 12.75 1.25 12.3247 1.25 11.8V4.2C1.25 3.67533 1.67533 3.25 2.2 3.25H3V9.5C3 10.6046 3.89543 11.5 5 11.5H7.00005Z'
                fill={color}
            />
        </svg>
    );
};

export default BlogBoldSmSVG;
