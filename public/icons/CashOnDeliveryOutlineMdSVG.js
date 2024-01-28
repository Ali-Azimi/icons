import React from 'react';
const CashOnDeliveryOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' {...props}>
            <path
                fill={color}
                fillRule='evenodd'
                d='M12.965 3.4a3.023 3.023 0 014.108 1.093l3.521 6.038a2.981 2.981 0 01-1.104 4.093l-6.673 3.816c-.267.152-.16.56.149.56H22a1 1 0 110 2H7.5a3.012 3.012 0 01-2.573-1.493l-3.52-6.038A2.981 2.981 0 012.51 9.376l10.455-5.977zm2.38 2.1a1.023 1.023 0 00-1.388-.365L3.503 11.112a.982.982 0 00-.369 1.35l2.032 3.485L17.34 8.919 15.346 5.5zm3.001 5.146L6.174 17.674l.481.826c.277.474.899.645 1.388.365l10.455-5.977a.982.982 0 00.369-1.35l-.52-.892z'
                clipRule='evenodd'></path>
        </svg>
    );
};

export default CashOnDeliveryOutlineMdSVG;
