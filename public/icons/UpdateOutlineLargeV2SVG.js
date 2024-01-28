import React from 'react';

const UpdateOutlineLargeV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.31511 19.7535C1.41557 20.2494 1.75099 20.6655 2.2143 20.8689C2.6776 21.0723 3.2109 21.0376 3.64398 20.7759L7.36044 18.5304C8.0957 18.0861 8.3316 17.1299 7.88734 16.3947C7.44308 15.6594 6.4869 15.4235 5.75165 15.8678L4.11339 16.8576C4.0898 15.6631 4.23309 14.4635 4.54257 13.2971C5.13285 11.0697 6.30937 9.05281 7.93263 7.47438C9.55547 5.89637 11.5573 4.82149 13.707 4.36215C15.856 3.90297 18.0723 4.07583 20.1076 4.85852C20.9094 5.16685 21.8094 4.76682 22.1177 3.96501C22.426 3.16321 22.026 2.26326 21.2242 1.95493C18.6227 0.954506 15.7924 0.735444 13.0569 1.31995C10.3222 1.9043 7.79719 3.26697 5.76392 5.24406C3.73109 7.22075 2.26836 9.73475 1.5356 12.4997C0.906246 14.872 0.829938 17.3586 1.31511 19.7535Z'
                fill={color}
            />
            <path
                d='M30.6849 11.8771C30.5844 11.3812 30.249 10.9651 29.7857 10.7617C29.3224 10.5583 28.7891 10.5929 28.356 10.8546L24.6396 13.1002C23.9043 13.5444 23.6684 14.5006 24.1127 15.2359C24.5569 15.9711 25.5131 16.207 26.2484 15.7628L27.8866 14.7729C27.9102 15.9675 27.7668 17.1675 27.4573 18.3339C26.867 20.5613 25.6906 22.5777 24.0674 24.1562C22.4445 25.7342 20.4427 26.8091 18.293 27.2684C16.144 27.7276 13.9277 27.5547 11.8924 26.772C11.0906 26.4637 10.1906 26.8637 9.8823 27.6655C9.57396 28.4673 9.974 29.3673 10.7758 29.6756C13.3773 30.676 16.2076 30.8951 18.9431 30.3106C21.6778 29.7262 24.2028 28.3636 26.2361 26.3865C28.2689 24.4098 29.7316 21.8958 30.4644 19.1308C31.0938 16.7585 31.1701 14.2719 30.6849 11.8771Z'
                fill={color}
            />
        </svg>
    );
};

export default UpdateOutlineLargeV2SVG;