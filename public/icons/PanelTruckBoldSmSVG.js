import React from 'react';

const PanelTruckBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.25 5C1.25 4.0335 2.0335 3.25 3 3.25H8.5C9.1981 3.25 9.80073 3.65876 10.0816 4.25H11.7054C12.3334 4.25 12.9132 4.5865 13.2248 5.13176L14.6446 7.61645C14.7116 7.72868 14.75 7.85985 14.75 8V10C14.75 10.6987 14.3406 11.3017 13.7485 11.5823C13.7052 12.7868 12.7151 13.75 11.5 13.75C10.3419 13.75 9.38809 12.875 9.26373 11.75H6.73627C6.61191 12.875 5.65814 13.75 4.5 13.75C3.28491 13.75 2.29478 12.7868 2.25148 11.5823C1.65945 11.3017 1.25 10.6987 1.25 10V5ZM12.5366 6.95077C12.6128 7.0841 12.5165 7.25 12.363 7.25H10.45C10.3395 7.25 10.25 7.16046 10.25 7.05V5.95C10.25 5.83954 10.3395 5.75 10.45 5.75H11.7054C11.7951 5.75 11.8779 5.79807 11.9225 5.87597L12.5366 6.95077ZM4.5 10.75C4.08579 10.75 3.75 11.0858 3.75 11.5C3.75 11.9142 4.08579 12.25 4.5 12.25C4.91421 12.25 5.25 11.9142 5.25 11.5C5.25 11.0858 4.91421 10.75 4.5 10.75ZM10.75 11.5C10.75 11.0858 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 11.0858 12.25 11.5C12.25 11.9142 11.9142 12.25 11.5 12.25C11.0858 12.25 10.75 11.9142 10.75 11.5Z'
                fill={color}
            />
        </svg>
    );
};

export default PanelTruckBoldSmSVG;
