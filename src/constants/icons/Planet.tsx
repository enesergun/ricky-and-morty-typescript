import React from "react";

const Planet = ({ size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3194 3.7925C14.8413 2.96813 13.5794 2.7825 11.6631 3.25125C10.776 2.56528 9.71422 2.14186 8.59847 2.02911C7.48272 1.91635 6.35772 2.11877 5.35125 2.61338C4.34479 3.10798 3.49722 3.87495 2.90482 4.82714C2.31242 5.77933 1.99894 6.87857 2 8C2.00008 8.25723 2.01636 8.5142 2.04875 8.76938C0.318127 10.5625 0.343127 11.625 0.681252 12.2075C1 12.76 1.665 13 2.54 13C3.14752 12.9874 3.75145 12.9035 4.33938 12.75C5.22663 13.4353 6.28826 13.8581 7.40372 13.9704C8.51919 14.0828 9.64379 13.8801 10.6499 13.3854C11.6559 12.8907 12.5031 12.1239 13.0953 11.1719C13.6875 10.22 14.0009 9.1211 14 8C14.0001 7.74403 13.9841 7.48831 13.9519 7.23438C14.7331 6.42188 15.2531 5.65 15.43 4.98938C15.5519 4.53188 15.515 4.12938 15.3194 3.7925ZM8 3C9.13247 3.00117 10.2311 3.38621 11.1165 4.09227C12.0019 4.79833 12.6218 5.7837 12.875 6.8875C11.8088 7.89125 10.3656 8.92063 8.99563 9.70813C7.27375 10.6963 5.78 11.3125 4.58875 11.65C3.85505 10.9657 3.34436 10.0764 3.12317 9.09776C2.90197 8.11915 2.98053 7.09663 3.3486 6.16329C3.71667 5.22996 4.35722 4.42906 5.18683 3.86486C6.01645 3.30066 6.99671 2.99929 8 3ZM1.54625 11.7056C1.455 11.5488 1.50563 11.2531 1.685 10.8931C1.86238 10.5558 2.07819 10.2402 2.32813 9.9525C2.57588 10.6703 2.95763 11.3346 3.45313 11.91C2.375 12.0913 1.7025 11.9756 1.54625 11.7056ZM8 13C7.15696 13.0009 6.32757 12.7871 5.59 12.3788C6.94381 11.9 8.25008 11.2961 9.49188 10.575C10.8406 9.80063 12.0344 8.96125 12.9963 8.1325C12.9606 9.43447 12.4188 10.6713 11.4859 11.5801C10.553 12.489 9.30246 12.9984 8 13ZM14.4638 4.73063C14.3575 5.125 14.0769 5.57625 13.6744 6.05125C13.4273 5.33258 13.0455 4.66759 12.5494 4.09188C13.4375 3.945 14.26 3.95625 14.4556 4.29438C14.5119 4.3925 14.515 4.53938 14.4638 4.73063Z"
        fill="white"
      />
    </svg>
  );
};

export default Planet;
