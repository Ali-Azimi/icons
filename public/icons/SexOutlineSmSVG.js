import React from 'react';

const SexOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.48529 1.5C2.83656 1.5 1.5 2.83656 1.5 4.48529C1.5 5.96366 2.57463 7.19104 3.98535 7.42889V8.9588C3.98535 9.23494 4.20921 9.4588 4.48535 9.4588C4.76149 9.4588 4.98535 9.23494 4.98535 8.9588V7.42887C6.39601 7.19096 7.47057 5.96361 7.47057 4.48529C7.47057 2.83656 6.13401 1.5 4.48529 1.5ZM2.5 4.48529C2.5 3.38884 3.38884 2.5 4.48529 2.5C5.58173 2.5 6.47057 3.38884 6.47057 4.48529C6.47057 5.58173 5.58173 6.47057 4.48529 6.47057C3.38884 6.47057 2.5 5.58173 2.5 4.48529Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.2129 8.05005C11.0472 7.221 9.41969 7.32911 8.37443 8.37436C7.20861 9.54019 7.20861 11.4304 8.37443 12.5962C9.54026 13.762 11.4304 13.762 12.5963 12.5962C13.6417 11.5507 13.7497 9.9228 12.9201 8.75706L14.0016 7.67553C14.1969 7.48027 14.1969 7.16369 14.0016 6.96842C13.8064 6.77316 13.4898 6.77316 13.2945 6.96842L12.2129 8.05005ZM9.08154 11.8891C9.85684 12.6644 11.1139 12.6644 11.8892 11.8891C12.6606 11.1176 12.6644 9.86924 11.9007 9.09305C11.8966 9.08926 11.8926 9.08538 11.8886 9.08142C11.8847 9.0775 11.8809 9.07353 11.8771 9.06952C11.1009 8.30619 9.85284 8.31017 9.08154 9.08147C8.30624 9.85677 8.30624 11.1138 9.08154 11.8891Z'
                fill={color}
            />
        </svg>
    );
};

export default SexOutlineSmSVG;