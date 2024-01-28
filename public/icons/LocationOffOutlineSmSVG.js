import React from 'react';

const LocationOffOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.3536 2.35355C14.5488 2.15829 14.5488 1.84171 14.3536 1.64645C14.1583 1.45118 13.8417 1.45118 13.6464 1.64645L12.0985 3.19441C11.8864 2.97227 11.6578 2.77533 11.4184 2.60182C10.2734 1.7719 8.91402 1.5 8 1.5C7.08598 1.5 5.72661 1.7719 4.58157 2.60182C3.41121 3.4501 2.5 4.85844 2.5 7.03334C2.5 8.49609 3.19598 9.97766 4.07887 11.214L1.64645 13.6464C1.45118 13.8417 1.45118 14.1583 1.64645 14.3536C1.84171 14.5488 2.15829 14.5488 2.35355 14.3536L14.3536 2.35355ZM4.79666 10.4962C4.02636 9.38105 3.5 8.15699 3.5 7.03334C3.5 5.18157 4.25546 4.07324 5.16843 3.41151C6.10672 2.73144 7.24735 2.5 8 2.5C8.75265 2.5 9.89328 2.73144 10.8316 3.41151C11.0273 3.55339 11.2158 3.71581 11.3912 3.90168L9.90798 5.38491C9.4494 4.84361 8.76465 4.5 7.99964 4.5C6.61893 4.5 5.49964 5.61929 5.49964 7C5.49964 7.76501 5.84325 8.44976 6.38455 8.90834L4.79666 10.4962ZM7.09573 8.19716C6.73362 7.92333 6.49964 7.48899 6.49964 7C6.49964 6.17157 7.17122 5.5 7.99964 5.5C8.48863 5.5 8.92297 5.73398 9.1968 6.09609L7.09573 8.19716Z'
                fill={color}
            />
            <path
                d='M12.5825 6.83174C12.5291 6.88511 12.5 6.95787 12.5 7.03334C12.5 8.28332 11.8486 9.65757 10.9347 10.868C10.0244 12.0735 8.9155 13.0346 8.12055 13.4687C8.04421 13.5104 7.95579 13.5104 7.87945 13.4687C7.64579 13.3411 7.38502 13.168 7.11014 12.9565C6.9026 12.7968 6.60726 12.807 6.4221 12.9921C6.21616 13.198 6.2274 13.5367 6.45721 13.7157C6.78687 13.9723 7.10615 14.1858 7.40013 14.3464C7.7752 14.5512 8.2248 14.5512 8.59986 14.3464C9.54781 13.8287 10.7588 12.7603 11.7327 11.4706C12.7029 10.1856 13.5 8.59872 13.5 7.03334C13.5 6.5994 12.9907 6.42354 12.6838 6.73038L12.5825 6.83174Z'
                fill={color}
            />
        </svg>
    );
};

export default LocationOffOutlineSmSVG;
