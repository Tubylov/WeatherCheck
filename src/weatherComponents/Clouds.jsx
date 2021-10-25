import React from "react";

function Clouds(props) {
return (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 220 220"
>
    <g filter="url(#filter0_d_1506:810)">
    <path
        fill="url(#paint0_linear_1506:810)"
        d="M160.244 158.694H58.297a38.3 38.3 0 01-28.622-63.713 38.298 38.298 0 0125.59-12.762 47.94 47.94 0 0189.269-16.748 47.953 47.953 0 0158.599 66.714 38.31 38.31 0 01-13.915 19.18 38.308 38.308 0 01-22.534 7.329h-6.44z"
    ></path>
    <path
        fill="#fff"
        fillOpacity="0.5"
        d="M166.684 158.161c4.112 0 8.154-.657 12.015-1.951a37.601 37.601 0 0010.418-5.43 37.918 37.918 0 008.188-8.276 37.584 37.584 0 005.321-10.483l.013-.038.018-.037a47.153 47.153 0 003.688-10.126c.861-3.6 1.297-7.32 1.297-11.056 0-3.216-.324-6.43-.963-9.553a47.162 47.162 0 00-7.131-16.947 47.762 47.762 0 00-5.788-7.015 47.414 47.414 0 00-15.066-10.158 47.168 47.168 0 00-8.896-2.761 47.755 47.755 0 00-9.553-.963c-5.325 0-10.553.876-15.536 2.605l-.421.146-.218-.388a47.645 47.645 0 00-17.061-17.515 47.145 47.145 0 00-24.28-6.683A47.202 47.202 0 0071.5 53.275a47.435 47.435 0 00-10.376 12.932 46.956 46.956 0 00-5.33 16.085l-.06.424-.426.033c-4.771.374-9.361 1.63-13.643 3.733A37.729 37.729 0 0030.623 94.7a37.64 37.64 0 00-10.09 25.697 37.53 37.53 0 002.967 14.7 37.744 37.744 0 003.482 6.414 38.025 38.025 0 0010.201 10.202 37.8 37.8 0 006.415 3.481 37.53 37.53 0 0014.7 2.968h108.386zm0 .532H58.297c-21.15 0-38.297-17.146-38.297-38.297 0-20.131 15.532-36.634 35.266-38.179C58.53 58.924 78.536 41 102.729 41c17.948 0 33.592 9.864 41.805 24.469a47.86 47.86 0 0115.711-2.635c26.471 0 47.929 21.46 47.929 47.93a47.73 47.73 0 01-5.041 21.421c-4.971 15.383-19.411 26.508-36.449 26.508z"
    ></path>
    </g>
    <defs>
    <filter
        id="filter0_d_1506:810"
        width="248.174"
        height="177.694"
        x="0"
        y="13"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
    >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
        in="SourceAlpha"
        result="hardAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="10" dy="2"></feOffset>
        <feGaussianBlur stdDeviation="15"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1506:810"
        ></feBlend>
        <feBlend
        in="SourceGraphic"
        in2="effect1_dropShadow_1506:810"
        result="shape"
        ></feBlend>
    </filter>
    <linearGradient
        id="paint0_linear_1506:810"
        x1="114.1"
        x2="168.763"
        y1="41.001"
        y2="173.161"
        gradientUnits="userSpaceOnUse"
    >
        <stop stopColor="#fff" stopOpacity="0.604"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0.2"></stop>
    </linearGradient>
    </defs>
</svg>
);
}

export default Clouds;
