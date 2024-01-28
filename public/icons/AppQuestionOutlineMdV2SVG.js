import React from 'react';

const AppQuestionOutlineMdV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.3334 10.875C15.3334 10.5298 15.6132 10.25 15.9584 10.25C16.3036 10.25 16.5834 10.5298 16.5834 10.875C16.5834 11.4273 17.0311 11.875 17.5834 11.875C18.1357 11.875 18.5834 11.4273 18.5834 10.875C18.5834 9.42525 17.4081 8.25 15.9584 8.25C14.5086 8.25 13.3334 9.42525 13.3334 10.875C13.3334 11.7611 13.7734 12.5444 14.4423 13.0181C14.6455 13.162 14.7943 13.2879 14.8876 13.4007C14.9376 13.4612 14.9538 13.4961 14.9584 13.5089V13.7188C14.9584 14.271 15.4061 14.7188 15.9584 14.7188C16.5107 14.7188 16.9584 14.271 16.9584 13.7188V13.5C16.9584 12.9125 16.696 12.4494 16.4291 12.1265C16.166 11.8082 15.8457 11.5612 15.5982 11.386C15.436 11.271 15.3334 11.085 15.3334 10.875ZM14.9591 13.5112C14.9599 13.5135 14.96 13.5147 14.96 13.5147L14.9591 13.5112ZM15.9584 16.8875C16.4071 16.8875 16.7709 16.5238 16.7709 16.075C16.7709 15.6263 16.4071 15.2625 15.9584 15.2625C15.5096 15.2625 15.1459 15.6263 15.1459 16.075C15.1459 16.5238 15.5096 16.8875 15.9584 16.8875Z'
                fill={color}
            />
            <path
                d='M3.82788 3C3.45166 3 3 3.36128 3 3.99601V20.004C3 20.6387 3.45166 21 3.82788 21H12.1721C12.5483 21 13 20.6387 13 20.004V19.5732C13.6321 19.7966 14.303 19.9377 15 19.9836V20.004C15 21.574 13.8149 23 12.1721 23H3.82788C2.18507 23 1 21.574 1 20.004V3.99601C1 2.42601 2.18507 1 3.82788 1H12.1721C13.8149 1 15 2.42601 15 3.99601V5.0164C14.303 5.06228 13.6321 5.20336 13 5.42676V3.99601C13 3.36128 12.5483 3 12.1721 3H11L10.2764 4.44721C10.107 4.786 9.76074 5 9.38197 5H6.61803C6.23926 5 5.893 4.786 5.72361 4.44721L5 3H3.82788Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.5 7C18.5376 7 21 9.46243 21 12.5V18H15.5C12.4624 18 10 15.5376 10 12.5C10 9.46243 12.4624 7 15.5 7ZM23 12.5C23 8.35786 19.6421 5 15.5 5C11.3579 5 8 8.35786 8 12.5C8 16.6421 11.3579 20 15.5 20H23V12.5Z'
                fill={color}
            />
        </svg>
    );
};

export default AppQuestionOutlineMdV2SVG;
