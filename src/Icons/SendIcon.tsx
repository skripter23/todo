import { FC } from "react";

interface SendIconProps {
  onClick?: () => void;
}

const SendIcon: FC<SendIconProps> = ({ onClick }) => {
  return (
    <svg onClick={onClick} width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_29_241)">
        <rect x="4" width="44" height="44" rx="10" fill="url(#paint0_linear_29_241)" shapeRendering="crispEdges" />
        <g clipPath="url(#clip0_29_241)">
          <path
            d="M19.1667 29.0707L33.7083 22.8374C34.3833 22.5457 34.3833 21.5957 33.7083 21.3041L19.1667 15.0707C18.6167 14.8291 18.0083 15.2374 18.0083 15.8291L18 19.6707C18 20.0874 18.3083 20.4457 18.725 20.4957L30.5 22.0707L18.725 23.6374C18.3083 23.6957 18 24.0541 18 24.4707L18.0083 28.3124C18.0083 28.9041 18.6167 29.3124 19.1667 29.0707Z"
            fill="#E5E5E5"
          />
        </g>
        <rect x="4.5" y="0.5" width="43" height="43" rx="9.5" stroke="url(#paint1_linear_29_241)" strokeOpacity="0.8" shapeRendering="crispEdges" />
      </g>
      <defs>
        <filter id="filter0_d_29_241" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_241" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_241" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_29_241" x1="-3.57246" y1="-4.79174e-06" x2="57.2998" y2="2.08565" gradientUnits="userSpaceOnUse">
          <stop stopColor="#019A5A" stopOpacity="0.7" />
          <stop offset="1" stopColor="#019A5A" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="paint1_linear_29_241" x1="26" y1="0" x2="26" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#019A5A" />
          <stop offset="1" stopColor="#019A5A" />
        </linearGradient>
        <clipPath id="clip0_29_241">
          <rect width="20" height="20" fill="white" transform="translate(16 12)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SendIcon;
