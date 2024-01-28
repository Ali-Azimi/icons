import React from 'react';

function TelegramLogoMdSVG({ ...props }) {
    return (
        <svg width={24} height={24} fill='none' {...props}>
            <path
                d='M12 1a10.999 10.999 0 00-7.777 18.778A10.998 10.998 0 1019.777 4.222 10.998 10.998 0 0012 1z'
                fill='url(#prefix__paint0_linear_1022_1414)'
            />
            <path
                d='M5.98 11.884a535.005 535.005 0 016.414-2.763c3.056-1.271 3.69-1.492 4.104-1.499.091-.002.294.02.426.128.11.09.141.212.157.298.013.085.032.28.017.433-.165 1.74-.882 5.96-1.246 7.908-.153.825-.457 1.101-.751 1.128-.64.059-1.125-.422-1.743-.828-.968-.634-1.514-1.03-2.455-1.649-1.086-.715-.381-1.109.238-1.751.161-.169 2.976-2.729 3.03-2.961.007-.03.014-.137-.052-.194-.063-.058-.158-.038-.227-.023-.098.022-1.643 1.045-4.64 3.067-.439.302-.836.449-1.193.44-.392-.008-1.148-.221-1.71-.404-.688-.224-1.236-.342-1.188-.723.024-.197.297-.4.818-.607z'
                fill='#fff'
            />
            <defs>
                <linearGradient id='prefix__paint0_linear_1022_1414' x1={12} y1={1} x2={12} y2={23} gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#2AABEE' />
                    <stop offset={1} stopColor='#229ED9' />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default TelegramLogoMdSVG;
