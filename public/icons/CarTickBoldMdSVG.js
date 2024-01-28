import React from 'react';

const CarTickBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.7593 2.65081C12.1187 2.23148 12.0701 1.60018 11.6508 1.24076C11.2315 0.881339 10.6002 0.929901 10.2407 1.34923L4.94352 7.52932L2.70711 5.29291C2.31658 4.90239 1.68342 4.90239 1.29289 5.29291C0.902369 5.68344 0.902369 6.3166 1.29289 6.70712L4.29289 9.70712C4.48985 9.90409 4.76004 10.01 5.03838 9.99928C5.31672 9.98859 5.57798 9.8623 5.75926 9.65081L11.7593 2.65081Z'
                fill={color}
            />
            <path
                d='M16.909 7C17.3747 7 17.7787 7.32141 17.8834 7.77514L18.7476 11.5202C18.6058 11.5068 18.4628 11.5 18.319 11.5H9.68103C8.31712 11.5 7.02523 12.1122 6.16155 13.1678C5.41039 14.0859 5 15.2356 5 16.4218V17.197C5 18.7451 6.25493 20 7.80297 20H8V22C8 22.5523 8.44772 23 9 23C9.55229 23 10 22.5523 10 22V20H19V22C19 22.5523 19.4477 23 20 23C20.5523 23 21 22.5523 21 22V19.8833C22.1567 19.538 23 18.466 23 17.197V16.4218C23 15.2356 22.5896 14.0859 21.8385 13.1678C21.589 12.8629 21.3037 12.5949 20.9913 12.3681C20.9872 12.3371 20.9816 12.3061 20.9744 12.2751L19.8322 7.32542C19.518 5.96423 18.306 5 16.909 5H13.5C12.9477 5 12.5 5.44772 12.5 6C12.5 6.55228 12.9477 7 13.5 7H16.909Z'
                fill={color}
            />
        </svg>
    );
};

export default CarTickBoldMdSVG;
