import React from 'react';

const NoteOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.5 3C1.5 2.17157 2.17157 1.5 3 1.5H9C9.82843 1.5 10.5 2.17157 10.5 3V4C10.5 4.27614 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.27614 9.5 4V3C9.5 2.72386 9.27614 2.5 9 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H9C9.27614 13.5 9.5 13.2761 9.5 13V12C9.5 11.7239 9.72386 11.5 10 11.5C10.2761 11.5 10.5 11.7239 10.5 12V13C10.5 13.8284 9.82843 14.5 9 14.5H3C2.17157 14.5 1.5 13.8284 1.5 13V3Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.7434 3.87511C11.9848 3.63487 12.3115 3.5 12.6521 3.5C12.9927 3.5 13.3194 3.63487 13.5608 3.87511L13.5616 3.87596L14.1135 4.42781C14.2342 4.54614 14.3305 4.68711 14.3968 4.84269C14.4636 4.99938 14.4987 5.16774 14.5 5.33803C14.5013 5.50832 14.4688 5.67719 14.4044 5.83487C14.34 5.99254 14.245 6.13587 14.1248 6.25658L10.6703 9.71113C10.5054 9.87843 10.2974 9.9968 10.0694 10.0531L10.0682 10.0534L8.36711 10.4786C8.32044 10.4905 8.27285 10.4974 8.22512 10.4994C8.21686 10.4998 8.20855 10.5 8.2002 10.5H5.2002C4.92405 10.5 4.7002 10.2761 4.7002 10C4.7002 9.72386 4.92405 9.5 5.2002 9.5H7.55459L7.94664 7.93178L7.94692 7.93067C8.00318 7.70259 8.12154 7.49456 8.28887 7.32968L11.7426 3.87596L11.7434 3.87511ZM12.4488 4.58391L8.99117 8.04159C8.95521 8.07687 8.92978 8.12146 8.91776 8.1704L8.91728 8.17236L8.61382 9.38618L9.82958 9.08223C9.8785 9.07021 9.92311 9.04481 9.9584 9.00884L9.96171 9.00547L13.4161 5.55112C13.4428 5.52418 13.4643 5.49191 13.4786 5.45678C13.493 5.42152 13.5003 5.38374 13.5 5.34563C13.4997 5.30752 13.4919 5.26986 13.4769 5.23482C13.462 5.1998 13.4403 5.16805 13.4129 5.14144L13.4083 5.13695L12.8554 4.58391C12.8014 4.53034 12.7282 4.5 12.6521 4.5C12.5761 4.5 12.5028 4.53036 12.4488 4.58391Z'
                fill={color}
            />
        </svg>
    );
};

export default NoteOutlineSmSVG;