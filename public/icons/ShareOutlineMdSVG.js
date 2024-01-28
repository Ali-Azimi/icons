import React from 'react';

const ShareOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.4839 7.24617C17.1683 8.00385 18.1586 8.48 19.26 8.48C21.3256 8.48 23 6.80554 23 4.74C23 2.67446 21.3256 1 19.26 1C17.1945 1 15.52 2.67446 15.52 4.74C15.52 4.98545 15.5437 5.22538 15.5888 5.45764L7.51622 9.49393C6.83178 8.73619 5.8415 8.26001 4.74 8.26001C2.67446 8.26001 1 9.93446 1 12C1 14.0656 2.67446 15.74 4.74 15.74C5.8415 15.74 6.83179 15.2638 7.51623 14.5061L15.5888 18.5424C15.5437 18.7746 15.52 19.0146 15.52 19.26C15.52 21.3256 17.1945 23 19.26 23C21.3256 23 23 21.3256 23 19.26C23 17.1945 21.3256 15.52 19.26 15.52C18.1586 15.52 17.1683 15.9962 16.4839 16.7538L8.41124 12.7175C8.45636 12.4853 8.48 12.2454 8.48 12C8.48 11.7546 8.45636 11.5147 8.41124 11.2825L16.4839 7.24617ZM19.26 3C18.299 3 17.52 3.77902 17.52 4.74C17.52 4.975 17.5666 5.19911 17.651 5.40362C17.6742 5.43823 17.6954 5.47466 17.7145 5.51284C17.7334 5.55073 17.7497 5.58924 17.7635 5.62817C18.0668 6.13822 18.6235 6.48 19.26 6.48C20.221 6.48 21 5.70098 21 4.74C21 3.77902 20.221 3 19.26 3ZM6.23656 11.1118C6.25032 11.1508 6.26664 11.1894 6.2856 11.2273C6.3047 11.2655 6.32591 11.3019 6.34903 11.3365C6.43343 11.541 6.48 11.7651 6.48 12C6.48 12.2349 6.43344 12.459 6.34905 12.6635C6.32592 12.6981 6.3047 12.7345 6.2856 12.7727C6.26664 12.8107 6.25031 12.8492 6.23655 12.8882C5.93319 13.3982 5.37651 13.74 4.74 13.74C3.77902 13.74 3 12.961 3 12C3 11.039 3.77902 10.26 4.74 10.26C5.37652 10.26 5.93321 10.6018 6.23656 11.1118ZM17.52 19.26C17.52 19.025 17.5666 18.8009 17.6511 18.5964C17.6742 18.5618 17.6954 18.5253 17.7145 18.4872C17.7334 18.4493 17.7497 18.4108 17.7634 18.3719C18.0668 17.8618 18.6235 17.52 19.26 17.52C20.221 17.52 21 18.299 21 19.26C21 20.221 20.221 21 19.26 21C18.299 21 17.52 20.221 17.52 19.26Z'
                fill={color}
            />
        </svg>
    );
};

export default ShareOutlineMdSVG;