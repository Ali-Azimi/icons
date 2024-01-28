import React from 'react';

const InfoOffOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 4.50003C11.1716 4.50003 10.5 5.1716 10.5 6.00003C10.5 6.82845 11.1716 7.50003 12 7.50003C12.8284 7.50003 13.5 6.82845 13.5 6.00003C13.5 5.1716 12.8284 4.50003 12 4.50003Z'
                fill={color}
            />
            <path
                d='M9 9.00003C9 8.44774 9.44771 8.00003 10 8.00003H11.0126C12.3777 8.00003 13.3417 9.33742 12.91 10.6325L12.1874 12.8001L12.4 12.8001C12.9523 12.8001 13.4 13.2478 13.4 13.8001C13.4 14.3524 12.9523 14.8001 12.4 14.8001H12.1874C10.8223 14.8001 9.85839 13.4627 10.2901 12.1676L11.0126 10H10C9.44771 10 9 9.55231 9 9.00003Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 6.00013C21 4.28473 19.5642 2.9186 17.8509 3.00383L5.85093 3.60084C4.254 3.68029 3 4.99823 3 6.59714V12.9155C3 14.0209 3.59913 14.9934 4.50056 15.5146C4.80964 15.6933 5 16.0233 5 16.3803V19.9992L11.3408 16.4862C11.6669 16.3055 12.0371 16.2195 12.4094 16.2381L17.8509 16.5088C19.5642 16.594 21 15.2279 21 13.5125V6.00013ZM17.7515 1.0063C20.607 0.864243 23 3.14113 23 6.00013V13.5125C23 16.3715 20.607 18.6484 17.7516 18.5063L12.8798 18.2639C12.5074 18.2454 12.1372 18.3313 11.8111 18.512L5.96926 21.7487C4.63624 22.4872 3 21.5232 3 19.9992V17.4153C3 17.1008 2.84758 16.8093 2.61612 16.5963C1.62142 15.6812 1 14.3684 1 12.9155V6.59714C1 3.93229 3.08999 1.73573 5.75155 1.60331L17.7515 1.0063Z'
                fill={color}
            />
        </svg>
    );
};

export default InfoOffOutlineMdSVG;