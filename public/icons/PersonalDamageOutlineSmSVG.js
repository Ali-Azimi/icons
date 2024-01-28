import React from 'react';

const PersonalDamageOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3.07629 3.24581C3.90091 2.32486 5.30916 2.24627 6.22995 3.06896L7.66687 4.35278C7.85661 4.52231 8.14339 4.52231 8.33313 4.35278L9.77004 3.06896C10.6908 2.24627 12.0991 2.32486 12.9237 3.24581C13.6921 4.10397 13.6921 5.40757 12.9237 6.26572L13.6687 6.93279C14.7771 5.69491 14.7771 3.81663 13.6687 2.57874C12.4763 1.24705 10.4365 1.13251 9.10378 2.32325L8 3.30943L6.89622 2.32325C5.56349 1.13251 3.52369 1.24705 2.3313 2.57874C1.2229 3.81663 1.2229 5.69491 2.3313 6.93279L6.86776 11.9992L7.61276 11.3321L3.07629 6.26572C2.3079 5.40757 2.3079 4.10397 3.07629 3.24581Z'
                fill={color}
            />
            <path
                d='M11.916 8.27734C12.0692 8.04758 12.0071 7.73714 11.7774 7.58397C11.5476 7.43079 11.2372 7.49288 11.084 7.72264L9.08398 10.7226C8.98169 10.8761 8.97215 11.0733 9.05916 11.2359C9.14617 11.3985 9.3156 11.5 9.5 11.5H11.5657L10.084 13.7226C9.9308 13.9524 9.99289 14.2628 10.2227 14.416C10.4524 14.5692 10.7628 14.5071 10.916 14.2773L12.916 11.2773C13.0183 11.1239 13.0278 10.9266 12.9408 10.7641C12.8538 10.6015 12.6844 10.5 12.5 10.5H10.4343L11.916 8.27734Z'
                fill={color}
            />
        </svg>
    );
};

export default PersonalDamageOutlineSmSVG;
