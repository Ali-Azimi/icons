import React from 'react';

const MailBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M22.5254 3.50211C22.5876 3.31465 22.4474 3.13072 22.2617 3.06354C22.1465 3.02186 22.0243 3 21.9 3H2.1C1.97568 3 1.85353 3.02187 1.73831 3.06355C1.55258 3.13073 1.4124 3.31468 1.47455 3.50216C1.50987 3.60867 1.58011 3.71289 1.68441 3.79269L10.4464 10.4963C10.867 10.8199 11.4226 11 12 11C12.5773 11 13.133 10.8199 13.5536 10.4963L22.3156 3.79269C22.4199 3.71288 22.4901 3.60864 22.5254 3.50211Z'
                fill={color}
            />
            <path
                d='M1 7.11974C1 6.70551 1.47483 6.47093 1.80382 6.72263L9.1373 12.3333L9.14003 12.3354C9.97816 12.9791 11.0036 13.2857 12 13.2857C12.9964 13.2857 14.0217 12.9791 14.8598 12.3355L14.8627 12.3333L22.1962 6.72261C22.5252 6.47091 23 6.70549 23 7.11972V13.2857C23 14.8012 22.4205 16.2547 21.3891 17.3263C20.3576 18.398 18.9587 19 17.5 19H6.5C5.77773 19 5.06253 18.8522 4.39524 18.565C3.72795 18.2779 3.12163 17.8569 2.61091 17.3263C1.57946 16.2547 1 14.8012 1 13.2857V7.11974Z'
                fill={color}
            />
        </svg>
    );
};

export default MailBoldMdSVG;