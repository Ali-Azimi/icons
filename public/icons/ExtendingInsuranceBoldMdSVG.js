import React from 'react';

const ExtendingInsuranceBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 2C8 1.44772 7.55228 1 7 1C6.44771 1 6 1.44772 6 2V3H5C2.79086 3 1 4.79086 1 7V19C1 21.2091 2.79086 23 5 23H17C19.2091 23 21 21.2091 21 19V16.4142L21.2929 16.7071C21.6834 17.0976 22.3166 17.0976 22.7071 16.7071C23.0976 16.3166 23.0976 15.6834 22.7071 15.2929L20.7122 13.298C20.6976 13.2831 20.6825 13.2687 20.6669 13.2548C20.6604 13.249 20.6539 13.2433 20.6473 13.2377C20.491 13.1047 20.3034 13.0275 20.1108 13.0061C20.0569 13.0001 20.0028 12.9985 19.949 13.0013C19.7263 13.0126 19.5067 13.098 19.3302 13.2574L17.0856 15.2526C16.6729 15.6195 16.6357 16.2516 17.0026 16.6644C17.3695 17.0771 18.0016 17.1143 18.4144 16.7474L19 16.2268V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19L3 11L22 11C22.5523 11 23 10.5523 23 10V7C23 4.79086 21.2091 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3L8 3V2Z'
                fill={color}
            />
        </svg>
    );
};

export default ExtendingInsuranceBoldMdSVG;