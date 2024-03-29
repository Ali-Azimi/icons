import React from 'react';

const SortDirectionDownOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.5 3C1.5 2.72386 1.72386 2.5 2 2.5H14C14.2761 2.5 14.5 2.72386 14.5 3C14.5 3.27614 14.2761 3.5 14 3.5H2C1.72386 3.5 1.5 3.27614 1.5 3Z'
                fill={color}
            />
            <path
                d='M1.5 6C1.5 5.72386 1.72386 5.5 2 5.5H8C8.27614 5.5 8.5 5.72386 8.5 6C8.5 6.27614 8.27614 6.5 8 6.5H2C1.72386 6.5 1.5 6.27614 1.5 6Z'
                fill={color}
            />
            <path
                d='M2 8.5C1.72386 8.5 1.5 8.72386 1.5 9C1.5 9.27614 1.72386 9.5 2 9.5H5C5.27614 9.5 5.5 9.27614 5.5 9C5.5 8.72386 5.27614 8.5 5 8.5H2Z'
                fill={color}
            />
            <path
                d='M12 6.5C11.7239 6.5 11.5 6.72386 11.5 7L11.5 12.7929L10.3536 11.6464C10.1583 11.4512 9.84171 11.4512 9.64645 11.6464C9.45118 11.8417 9.45118 12.1583 9.64645 12.3536L11.6457 14.3528C11.7362 14.4437 11.8615 14.5 12 14.5C12.1326 14.5 12.2598 14.4473 12.3536 14.3536L14.3536 12.3536C14.5488 12.1583 14.5488 11.8417 14.3536 11.6464C14.1583 11.4512 13.8417 11.4512 13.6464 11.6464L12.5 12.7929L12.5 7C12.5 6.72386 12.2761 6.5 12 6.5Z'
                fill={color}
            />
        </svg>
    );
};

export default SortDirectionDownOutlineSmSVG;
