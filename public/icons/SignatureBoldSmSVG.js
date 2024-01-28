import React from 'react';

const SignatureBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4.08697 2.38064C4.08697 1.94875 4.43735 1.59863 4.86958 1.59863H11.1304C11.5627 1.59863 11.913 1.94875 11.913 2.38064C11.913 3.63396 12.5936 4.72939 13.6093 5.31649C13.8511 5.45627 14 5.71425 14 5.99341V6.55138C14 6.69794 13.9588 6.84156 13.881 6.96584L9.16841 14.5003C9.05743 14.6777 8.78261 14.5994 8.78261 14.3903V9.24316C9.39955 8.9503 9.82609 8.32195 9.82609 7.59406C9.82609 6.58631 9.00852 5.76936 8 5.76936C6.99148 5.76936 6.17391 6.58631 6.17391 7.59406C6.17391 8.32195 6.60045 8.9503 7.21739 9.24316V14.3903C7.21739 14.5994 6.94257 14.6777 6.83159 14.5003L2.11896 6.96584C2.04122 6.84155 2 6.69794 2 6.55138V5.99341C2 5.71426 2.14892 5.45628 2.39074 5.3165C3.40645 4.72939 4.08697 3.63397 4.08697 2.38064Z'
                fill={color}
            />
        </svg>
    );
};

export default SignatureBoldSmSVG;
