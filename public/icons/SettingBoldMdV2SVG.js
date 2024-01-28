import React from 'react';

const SettingBoldMdV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.0005 1.00195C11.1914 1.00195 10.4148 1.32031 9.83854 1.88821L8.64549 3.0912C8.44299 3.28849 8.17171 3.39942 7.8889 3.40047H6.47047C5.65625 3.40047 4.87538 3.72391 4.29965 4.29965C3.72391 4.87539 3.40047 5.65626 3.40047 6.47047V7.8889C3.39942 8.17172 3.28848 8.443 3.0912 8.6455L1.89628 9.83036L1.88821 9.83854C1.3203 10.4148 1.00195 11.1914 1.00195 12.0005C1.00195 12.8095 1.32025 13.5862 1.88816 14.1624L3.09122 15.3555C3.28849 15.558 3.39942 15.8292 3.40047 16.112V17.5305C3.40047 18.3447 3.72391 19.1255 4.29965 19.7013C4.87538 20.277 5.65625 20.6005 6.47047 20.6005H7.88896C8.17175 20.6015 8.44301 20.7125 8.64549 20.9097L9.83036 22.1047L9.83854 22.1127C10.4148 22.6806 11.1914 22.999 12.0005 22.999C12.8095 22.999 13.5862 22.6807 14.1624 22.1128L15.3555 20.9097C15.5579 20.7125 15.8292 20.6015 16.112 20.6005H17.5305C18.3447 20.6005 19.1255 20.277 19.7013 19.7013C20.277 19.1255 20.6005 18.3447 20.6005 17.5305V16.112C20.6015 15.8292 20.7125 15.5579 20.9097 15.3554L22.1047 14.1706L22.1127 14.1624C22.6806 13.5861 22.999 12.8095 22.999 12.0005C22.999 11.1914 22.6807 10.4148 22.1128 9.8385L20.9098 8.64553C20.7125 8.44305 20.6015 8.17178 20.6005 7.88896V6.47047C20.6005 5.65626 20.277 4.87539 19.7013 4.29965C19.1255 3.72391 18.3447 3.40047 17.5305 3.40047H16.112C15.8292 3.39942 15.5579 3.28849 15.3554 3.0912L14.1706 1.89628L14.1624 1.88821C13.5861 1.32031 12.8095 1.00195 12.0005 1.00195ZM9.00049 12.0005C9.00049 10.3436 10.3436 9.00046 12.0005 9.00046C13.6573 9.00046 15.0005 10.3436 15.0005 12.0005C15.0005 13.6573 13.6573 15.0005 12.0005 15.0005C10.3436 15.0005 9.00049 13.6573 9.00049 12.0005Z'
                fill={color}
            />
        </svg>
    );
};

export default SettingBoldMdV2SVG;