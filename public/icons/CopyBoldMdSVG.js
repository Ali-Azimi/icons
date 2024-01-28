import React from 'react';

const CopyBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4.5 5.04148V17.5C4.5 19.1569 5.84315 20.5 7.5 20.5H16.9585C16.7205 21.9189 15.4865 23 14 23H5C3.34315 23 2 21.6569 2 20V8C2 6.5135 3.08114 5.27952 4.5 5.04148Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 1C7.34315 1 6 2.34315 6 4V16C6 17.6569 7.34315 19 9 19H19C20.6569 19 22 17.6569 22 16V8C22 4.13401 18.866 1 15 1H9ZM15 6V3C17.7614 3 20 5.23858 20 8H17C15.8954 8 15 7.10457 15 6Z'
                fill={color}
            />
        </svg>
    );
};

export default CopyBoldMdSVG;
