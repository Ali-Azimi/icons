import React from 'react';

const PostalCodeOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.5 7.5C6.5 7.22386 6.72386 7 7 7H9C9.27614 7 9.5 7.22386 9.5 7.5C9.5 7.77614 9.27614 8 9 8H7C6.72386 8 6.5 7.77614 6.5 7.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.6402 1.73178C8.26935 1.42274 7.73068 1.42274 7.35983 1.73178L1.67992 6.46504C1.46778 6.64182 1.43912 6.9571 1.6159 7.16924C1.79268 7.38138 2.10797 7.41004 2.3201 7.23326L3.61108 6.15744L4.50781 11.0895C4.55104 11.3272 4.7581 11.5 4.99975 11.5H7.5V14C7.5 14.2761 7.72386 14.5 8 14.5C8.27614 14.5 8.5 14.2761 8.5 14V11.5H10.9997C11.2414 11.5 11.4485 11.3272 11.4917 11.0895L12.3885 6.15706L13.6799 7.23326C13.8921 7.41004 14.2073 7.38138 14.3841 7.16924C14.5609 6.9571 14.5322 6.64182 14.3201 6.46504L8.6402 1.73178ZM7.99478 10.5L8 10.5L8.00522 10.5H10.5825L11.5058 5.42151L8.00001 2.5L4.49374 5.42189L5.41704 10.5H7.99478Z'
                fill={color}
            />
        </svg>
    );
};

export default PostalCodeOutlineSmSVG;