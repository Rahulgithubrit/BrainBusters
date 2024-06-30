import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const GameOneSubTitle = (props) => (
  <Svg
    width={197}
    height={31}
    viewBox="0 0 197 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_62_2)">
      <Path
        d="M5.947 3.797L5.375 9H4.44L5.375 0.915L8.455 6.492L11.535 0.915L12.47 9H11.535L10.963 3.797L8.455 8.285L5.947 3.797ZM15.6883 9.11C15.2189 9.11 14.8009 9 14.4343 8.78C14.0749 8.55267 13.7926 8.241 13.5873 7.845C13.3893 7.449 13.2903 6.99067 13.2903 6.47C13.2903 5.942 13.3929 5.48 13.5983 5.084C13.8109 4.688 14.1043 4.38 14.4783 4.16C14.8596 3.94 15.2996 3.83 15.7983 3.83C16.2969 3.83 16.7223 3.93633 17.0743 4.149C17.4336 4.35433 17.7086 4.65133 17.8993 5.04C18.0899 5.42867 18.1853 5.89067 18.1853 6.426C18.1853 6.47733 18.1816 6.53233 18.1743 6.591C18.1743 6.64233 18.1743 6.67533 18.1743 6.69H13.8513V5.942H17.4813L17.1293 6.448C17.1513 6.41133 17.1733 6.35633 17.1953 6.283C17.2173 6.20233 17.2283 6.13633 17.2283 6.085C17.2283 5.78433 17.1659 5.524 17.0413 5.304C16.9239 5.084 16.7589 4.91167 16.5463 4.787C16.3336 4.66233 16.0843 4.6 15.7983 4.6C15.4609 4.6 15.1713 4.67333 14.9293 4.82C14.6946 4.95933 14.5113 5.16467 14.3793 5.436C14.2546 5.7 14.1886 6.02633 14.1813 6.415C14.1813 6.811 14.2436 7.14833 14.3683 7.427C14.4929 7.70567 14.6763 7.91833 14.9183 8.065C15.1603 8.21167 15.4536 8.285 15.7983 8.285C16.1429 8.285 16.4473 8.21167 16.7113 8.065C16.9753 7.911 17.1989 7.68 17.3823 7.372L18.0973 7.823C17.8333 8.24833 17.4996 8.571 17.0963 8.791C16.7003 9.00367 16.2309 9.11 15.6883 9.11ZM26.3214 5.81V9H25.4414V5.92C25.4414 5.48733 25.3607 5.16833 25.1994 4.963C25.0454 4.75767 24.8034 4.655 24.4734 4.655C24.2314 4.655 24.0224 4.70633 23.8464 4.809C23.6704 4.90433 23.5347 5.04733 23.4394 5.238C23.3441 5.42867 23.2964 5.656 23.2964 5.92V9H22.4164V5.92C22.4164 5.48733 22.3357 5.16833 22.1744 4.963C22.0204 4.75767 21.7784 4.655 21.4484 4.655C21.2064 4.655 20.9974 4.70633 20.8214 4.809C20.6454 4.90433 20.5097 5.04733 20.4144 5.238C20.3191 5.42867 20.2714 5.656 20.2714 5.92V9H19.3914V3.94H20.2714V4.677C20.4254 4.391 20.6161 4.17833 20.8434 4.039C21.0781 3.89967 21.3531 3.83 21.6684 3.83C22.0204 3.83 22.3211 3.91433 22.5704 4.083C22.8271 4.24433 23.0141 4.47533 23.1314 4.776C23.3074 4.46067 23.5274 4.226 23.7914 4.072C24.0554 3.91067 24.3561 3.83 24.6934 3.83C25.0381 3.83 25.3314 3.907 25.5734 4.061C25.8154 4.215 25.9987 4.44233 26.1234 4.743C26.2554 5.03633 26.3214 5.392 26.3214 5.81ZM27.5344 6.47C27.5344 5.95667 27.6481 5.502 27.8754 5.106C28.1101 4.71 28.4254 4.39833 28.8214 4.171C29.2174 3.94367 29.6611 3.83 30.1524 3.83C30.6511 3.83 31.0947 3.94367 31.4834 4.171C31.8794 4.39833 32.1911 4.71 32.4184 5.106C32.6531 5.502 32.7704 5.95667 32.7704 6.47C32.7704 6.976 32.6531 7.43067 32.4184 7.834C32.1911 8.23 31.8794 8.54167 31.4834 8.769C31.0947 8.99633 30.6511 9.11 30.1524 9.11C29.6611 9.11 29.2174 8.99633 28.8214 8.769C28.4254 8.54167 28.1101 8.23 27.8754 7.834C27.6481 7.43067 27.5344 6.976 27.5344 6.47ZM28.4254 6.47C28.4254 6.822 28.4987 7.13367 28.6454 7.405C28.7994 7.67633 29.0047 7.89267 29.2614 8.054C29.5254 8.208 29.8224 8.285 30.1524 8.285C30.4824 8.285 30.7757 8.208 31.0324 8.054C31.2964 7.89267 31.5017 7.67633 31.6484 7.405C31.8024 7.13367 31.8794 6.822 31.8794 6.47C31.8794 6.118 31.8024 5.80633 31.6484 5.535C31.5017 5.25633 31.2964 5.04 31.0324 4.886C30.7757 4.732 30.4824 4.655 30.1524 4.655C29.8224 4.655 29.5254 4.732 29.2614 4.886C29.0047 5.04 28.7994 5.25633 28.6454 5.535C28.4987 5.80633 28.4254 6.118 28.4254 6.47ZM34.8593 3.94V9H33.9793V3.94H34.8593ZM36.3883 4.908C36.271 4.82 36.1646 4.75767 36.0693 4.721C35.974 4.677 35.853 4.655 35.7063 4.655C35.4863 4.655 35.314 4.71 35.1893 4.82C35.0646 4.93 34.9766 5.08033 34.9253 5.271C34.8813 5.46167 34.8593 5.678 34.8593 5.92H34.4633C34.4633 5.51667 34.533 5.161 34.6723 4.853C34.819 4.53767 35.006 4.28833 35.2333 4.105C35.4606 3.92167 35.6916 3.83 35.9263 3.83C36.1096 3.83 36.2783 3.85567 36.4323 3.907C36.5936 3.951 36.7403 4.04267 36.8723 4.182L36.3883 4.908ZM37.7498 1.85C37.7498 1.68133 37.8085 1.53833 37.9258 1.421C38.0505 1.30367 38.1935 1.245 38.3548 1.245C38.5235 1.245 38.6665 1.30367 38.7838 1.421C38.9011 1.53833 38.9598 1.68133 38.9598 1.85C38.9598 2.01133 38.9011 2.15433 38.7838 2.279C38.6665 2.39633 38.5235 2.455 38.3548 2.455C38.1935 2.455 38.0505 2.39633 37.9258 2.279C37.8085 2.15433 37.7498 2.01133 37.7498 1.85ZM37.9148 3.94H38.7948V9H37.9148V3.94ZM43.0822 4.765H40.2772V3.94H44.6772L41.5422 8.175H44.4572V9H39.9472L43.0822 4.765ZM47.4637 9.11C46.9943 9.11 46.5763 9 46.2097 8.78C45.8503 8.55267 45.568 8.241 45.3627 7.845C45.1647 7.449 45.0657 6.99067 45.0657 6.47C45.0657 5.942 45.1683 5.48 45.3737 5.084C45.5863 4.688 45.8797 4.38 46.2537 4.16C46.635 3.94 47.075 3.83 47.5737 3.83C48.0723 3.83 48.4977 3.93633 48.8497 4.149C49.209 4.35433 49.484 4.65133 49.6747 5.04C49.8653 5.42867 49.9607 5.89067 49.9607 6.426C49.9607 6.47733 49.957 6.53233 49.9497 6.591C49.9497 6.64233 49.9497 6.67533 49.9497 6.69H45.6267V5.942H49.2567L48.9047 6.448C48.9267 6.41133 48.9487 6.35633 48.9707 6.283C48.9927 6.20233 49.0037 6.13633 49.0037 6.085C49.0037 5.78433 48.9413 5.524 48.8167 5.304C48.6993 5.084 48.5343 4.91167 48.3217 4.787C48.109 4.66233 47.8597 4.6 47.5737 4.6C47.2363 4.6 46.9467 4.67333 46.7047 4.82C46.47 4.95933 46.2867 5.16467 46.1547 5.436C46.03 5.7 45.964 6.02633 45.9567 6.415C45.9567 6.811 46.019 7.14833 46.1437 7.427C46.2683 7.70567 46.4517 7.91833 46.6937 8.065C46.9357 8.21167 47.229 8.285 47.5737 8.285C47.9183 8.285 48.2227 8.21167 48.4867 8.065C48.7507 7.911 48.9743 7.68 49.1577 7.372L49.8727 7.823C49.6087 8.24833 49.275 8.571 48.8717 8.791C48.4757 9.00367 48.0063 9.11 47.4637 9.11ZM53.6946 3.94H56.2246V4.765H53.6946V3.94ZM54.5196 2.18H55.3996V9H54.5196V2.18ZM57.9872 0.42V9H57.1072V0.42H57.9872ZM60.3522 5.92C60.3522 5.502 60.2606 5.18667 60.0772 4.974C59.9012 4.76133 59.6336 4.655 59.2742 4.655C59.0176 4.655 58.7902 4.71 58.5922 4.82C58.4016 4.93 58.2512 5.08033 58.1412 5.271C58.0386 5.46167 57.9872 5.678 57.9872 5.92H57.7012C57.7012 5.51667 57.7782 5.161 57.9322 4.853C58.0862 4.53767 58.2952 4.28833 58.5592 4.105C58.8306 3.92167 59.1422 3.83 59.4942 3.83C59.8462 3.83 60.1506 3.90333 60.4072 4.05C60.6712 4.19667 60.8729 4.41667 61.0122 4.71C61.1589 5.00333 61.2322 5.37 61.2322 5.81V9H60.3522V5.92ZM64.8445 9.11C64.3752 9.11 63.9572 9 63.5905 8.78C63.2312 8.55267 62.9489 8.241 62.7435 7.845C62.5455 7.449 62.4465 6.99067 62.4465 6.47C62.4465 5.942 62.5492 5.48 62.7545 5.084C62.9672 4.688 63.2605 4.38 63.6345 4.16C64.0159 3.94 64.4559 3.83 64.9545 3.83C65.4532 3.83 65.8785 3.93633 66.2305 4.149C66.5899 4.35433 66.8649 4.65133 67.0555 5.04C67.2462 5.42867 67.3415 5.89067 67.3415 6.426C67.3415 6.47733 67.3379 6.53233 67.3305 6.591C67.3305 6.64233 67.3305 6.67533 67.3305 6.69H63.0075V5.942H66.6375L66.2855 6.448C66.3075 6.41133 66.3295 6.35633 66.3515 6.283C66.3735 6.20233 66.3845 6.13633 66.3845 6.085C66.3845 5.78433 66.3222 5.524 66.1975 5.304C66.0802 5.084 65.9152 4.91167 65.7025 4.787C65.4899 4.66233 65.2405 4.6 64.9545 4.6C64.6172 4.6 64.3275 4.67333 64.0855 4.82C63.8509 4.95933 63.6675 5.16467 63.5355 5.436C63.4109 5.7 63.3449 6.02633 63.3375 6.415C63.3375 6.811 63.3999 7.14833 63.5245 7.427C63.6492 7.70567 63.8325 7.91833 64.0745 8.065C64.3165 8.21167 64.6099 8.285 64.9545 8.285C65.2992 8.285 65.6035 8.21167 65.8675 8.065C66.1315 7.911 66.3552 7.68 66.5385 7.372L67.2535 7.823C66.9895 8.24833 66.6559 8.571 66.2525 8.791C65.8565 9.00367 65.3872 9.11 64.8445 9.11ZM75.0905 5.92C75.0905 5.502 74.9988 5.18667 74.8155 4.974C74.6322 4.76133 74.3645 4.655 74.0125 4.655C73.7558 4.655 73.5285 4.71 73.3305 4.82C73.1398 4.92267 72.9895 5.06933 72.8795 5.26C72.7768 5.45067 72.7255 5.67067 72.7255 5.92V9H71.8455V3.94H72.7255V4.732C72.8942 4.424 73.1032 4.19667 73.3525 4.05C73.6092 3.90333 73.9025 3.83 74.2325 3.83C74.7678 3.83 75.1895 4.00967 75.4975 4.369C75.8128 4.721 75.9705 5.20133 75.9705 5.81V9H75.0905V5.92ZM78.5048 7.02C78.5048 7.42333 78.5965 7.735 78.7798 7.955C78.9631 8.175 79.2308 8.285 79.5828 8.285C79.8395 8.285 80.0631 8.23367 80.2538 8.131C80.4518 8.021 80.6021 7.87067 80.7048 7.68C80.8148 7.48933 80.8698 7.26933 80.8698 7.02V3.94H81.7498V9H80.8698V8.208C80.7011 8.50867 80.4921 8.736 80.2428 8.89C79.9935 9.03667 79.7001 9.11 79.3628 9.11C78.8348 9.11 78.4131 8.93033 78.0978 8.571C77.7825 8.21167 77.6248 7.73133 77.6248 7.13V3.94H78.5048V7.02ZM90.3341 5.81V9H89.4541V5.92C89.4541 5.48733 89.3734 5.16833 89.2121 4.963C89.0581 4.75767 88.8161 4.655 88.4861 4.655C88.2441 4.655 88.0351 4.70633 87.8591 4.809C87.6831 4.90433 87.5474 5.04733 87.4521 5.238C87.3568 5.42867 87.3091 5.656 87.3091 5.92V9H86.4291V5.92C86.4291 5.48733 86.3484 5.16833 86.1871 4.963C86.0331 4.75767 85.7911 4.655 85.4611 4.655C85.2191 4.655 85.0101 4.70633 84.8341 4.809C84.6581 4.90433 84.5224 5.04733 84.4271 5.238C84.3318 5.42867 84.2841 5.656 84.2841 5.92V9H83.4041V3.94H84.2841V4.677C84.4381 4.391 84.6288 4.17833 84.8561 4.039C85.0908 3.89967 85.3658 3.83 85.6811 3.83C86.0331 3.83 86.3338 3.91433 86.5831 4.083C86.8398 4.24433 87.0268 4.47533 87.1441 4.776C87.3201 4.46067 87.5401 4.226 87.8041 4.072C88.0681 3.91067 88.3688 3.83 88.7061 3.83C89.0508 3.83 89.3441 3.907 89.5861 4.061C89.8281 4.215 90.0114 4.44233 90.1361 4.743C90.2681 5.03633 90.3341 5.392 90.3341 5.81ZM92.8121 0.42V9H91.9321V0.42H92.8121ZM97.0471 6.47C97.0471 7.01267 96.9334 7.482 96.7061 7.878C96.4788 8.274 96.1744 8.57833 95.7931 8.791C95.4191 9.00367 95.0011 9.11 94.5391 9.11C94.1211 9.11 93.7508 9.00367 93.4281 8.791C93.1128 8.57833 92.8634 8.274 92.6801 7.878C92.5041 7.482 92.4161 7.01267 92.4161 6.47C92.4161 5.92 92.5041 5.45067 92.6801 5.062C92.8634 4.666 93.1128 4.36167 93.4281 4.149C93.7508 3.93633 94.1211 3.83 94.5391 3.83C95.0011 3.83 95.4191 3.93633 95.7931 4.149C96.1744 4.36167 96.4788 4.666 96.7061 5.062C96.9334 5.45067 97.0471 5.92 97.0471 6.47ZM96.1561 6.47C96.1561 6.08133 96.0754 5.75133 95.9141 5.48C95.7601 5.20867 95.5511 5.00333 95.2871 4.864C95.0304 4.72467 94.7444 4.655 94.4291 4.655C94.1724 4.655 93.9194 4.72467 93.6701 4.864C93.4208 5.00333 93.2154 5.20867 93.0541 5.48C92.8928 5.75133 92.8121 6.08133 92.8121 6.47C92.8121 6.85867 92.8928 7.18867 93.0541 7.46C93.2154 7.73133 93.4208 7.93667 93.6701 8.076C93.9194 8.21533 94.1724 8.285 94.4291 8.285C94.7444 8.285 95.0304 8.21533 95.2871 8.076C95.5511 7.93667 95.7601 7.73133 95.9141 7.46C96.0754 7.18867 96.1561 6.85867 96.1561 6.47ZM100.219 9.11C99.7492 9.11 99.3312 9 98.9645 8.78C98.6052 8.55267 98.3229 8.241 98.1175 7.845C97.9195 7.449 97.8205 6.99067 97.8205 6.47C97.8205 5.942 97.9232 5.48 98.1285 5.084C98.3412 4.688 98.6345 4.38 99.0085 4.16C99.3899 3.94 99.8299 3.83 100.329 3.83C100.827 3.83 101.253 3.93633 101.605 4.149C101.964 4.35433 102.239 4.65133 102.43 5.04C102.62 5.42867 102.716 5.89067 102.716 6.426C102.716 6.47733 102.712 6.53233 102.705 6.591C102.705 6.64233 102.705 6.67533 102.705 6.69H98.3815V5.942H102.012L101.66 6.448C101.682 6.41133 101.704 6.35633 101.726 6.283C101.748 6.20233 101.759 6.13633 101.759 6.085C101.759 5.78433 101.696 5.524 101.572 5.304C101.454 5.084 101.289 4.91167 101.077 4.787C100.864 4.66233 100.615 4.6 100.329 4.6C99.9912 4.6 99.7015 4.67333 99.4595 4.82C99.2249 4.95933 99.0415 5.16467 98.9095 5.436C98.7849 5.7 98.7189 6.02633 98.7115 6.415C98.7115 6.811 98.7739 7.14833 98.8985 7.427C99.0232 7.70567 99.2065 7.91833 99.4485 8.065C99.6905 8.21167 99.9839 8.285 100.329 8.285C100.673 8.285 100.978 8.21167 101.242 8.065C101.506 7.911 101.729 7.68 101.913 7.372L102.628 7.823C102.364 8.24833 102.03 8.571 101.627 8.791C101.231 9.00367 100.761 9.11 100.219 9.11ZM104.802 3.94V9H103.922V3.94H104.802ZM106.331 4.908C106.213 4.82 106.107 4.75767 106.012 4.721C105.916 4.677 105.795 4.655 105.649 4.655C105.429 4.655 105.256 4.71 105.132 4.82C105.007 4.93 104.919 5.08033 104.868 5.271C104.824 5.46167 104.802 5.678 104.802 5.92H104.406C104.406 5.51667 104.475 5.161 104.615 4.853C104.761 4.53767 104.948 4.28833 105.176 4.105C105.403 3.92167 105.634 3.83 105.869 3.83C106.052 3.83 106.221 3.85567 106.375 3.907C106.536 3.951 106.683 4.04267 106.815 4.182L106.331 4.908ZM111.199 7.449C111.302 7.603 111.419 7.746 111.551 7.878C111.683 8.01 111.833 8.11633 112.002 8.197C112.178 8.27033 112.369 8.307 112.574 8.307C112.823 8.307 113.018 8.252 113.157 8.142C113.304 8.02467 113.377 7.867 113.377 7.669C113.377 7.493 113.318 7.34633 113.201 7.229C113.091 7.10433 112.948 7.00167 112.772 6.921C112.596 6.833 112.409 6.75233 112.211 6.679C111.991 6.591 111.767 6.48833 111.54 6.371C111.32 6.24633 111.133 6.08867 110.979 5.898C110.832 5.7 110.759 5.45433 110.759 5.161C110.759 4.86033 110.836 4.611 110.99 4.413C111.151 4.215 111.357 4.06833 111.606 3.973C111.863 3.87767 112.127 3.83 112.398 3.83C112.669 3.83 112.922 3.874 113.157 3.962C113.399 4.05 113.612 4.16733 113.795 4.314C113.978 4.46067 114.121 4.62933 114.224 4.82L113.52 5.271C113.381 5.08033 113.205 4.92267 112.992 4.798C112.787 4.67333 112.552 4.611 112.288 4.611C112.105 4.611 111.947 4.65133 111.815 4.732C111.683 4.81267 111.617 4.93733 111.617 5.106C111.617 5.238 111.668 5.35533 111.771 5.458C111.874 5.56067 112.006 5.65233 112.167 5.733C112.328 5.81367 112.497 5.89067 112.673 5.964C112.966 6.08133 113.234 6.20967 113.476 6.349C113.718 6.481 113.909 6.64233 114.048 6.833C114.195 7.02367 114.268 7.26933 114.268 7.57C114.268 8.01 114.107 8.37667 113.784 8.67C113.469 8.96333 113.051 9.11 112.53 9.11C112.193 9.11 111.888 9.05133 111.617 8.934C111.346 8.80933 111.115 8.65167 110.924 8.461C110.741 8.27033 110.601 8.076 110.506 7.878L111.199 7.449ZM117.385 9.11C116.915 9.11 116.497 9 116.131 8.78C115.771 8.55267 115.489 8.241 115.284 7.845C115.086 7.449 114.987 6.99067 114.987 6.47C114.987 5.942 115.089 5.48 115.295 5.084C115.507 4.688 115.801 4.38 116.175 4.16C116.556 3.94 116.996 3.83 117.495 3.83C117.993 3.83 118.419 3.93633 118.771 4.149C119.13 4.35433 119.405 4.65133 119.596 5.04C119.786 5.42867 119.882 5.89067 119.882 6.426C119.882 6.47733 119.878 6.53233 119.871 6.591C119.871 6.64233 119.871 6.67533 119.871 6.69H115.548V5.942H119.178L118.826 6.448C118.848 6.41133 118.87 6.35633 118.892 6.283C118.914 6.20233 118.925 6.13633 118.925 6.085C118.925 5.78433 118.862 5.524 118.738 5.304C118.62 5.084 118.455 4.91167 118.243 4.787C118.03 4.66233 117.781 4.6 117.495 4.6C117.157 4.6 116.868 4.67333 116.626 4.82C116.391 4.95933 116.208 5.16467 116.076 5.436C115.951 5.7 115.885 6.02633 115.878 6.415C115.878 6.811 115.94 7.14833 116.065 7.427C116.189 7.70567 116.373 7.91833 116.615 8.065C116.857 8.21167 117.15 8.285 117.495 8.285C117.839 8.285 118.144 8.21167 118.408 8.065C118.672 7.911 118.895 7.68 119.079 7.372L119.794 7.823C119.53 8.24833 119.196 8.571 118.793 8.791C118.397 9.00367 117.927 9.11 117.385 9.11ZM124.883 11.42V3.94H125.763V11.42H124.883ZM120.648 6.47C120.648 5.92 120.761 5.45067 120.989 5.062C121.216 4.666 121.52 4.36167 121.902 4.149C122.283 3.93633 122.701 3.83 123.156 3.83C123.581 3.83 123.951 3.93633 124.267 4.149C124.582 4.36167 124.828 4.666 125.004 5.062C125.187 5.45067 125.279 5.92 125.279 6.47C125.279 7.01267 125.187 7.482 125.004 7.878C124.828 8.274 124.582 8.57833 124.267 8.791C123.951 9.00367 123.581 9.11 123.156 9.11C122.701 9.11 122.283 9.00367 121.902 8.791C121.52 8.57833 121.216 8.274 120.989 7.878C120.761 7.482 120.648 7.01267 120.648 6.47ZM121.539 6.47C121.539 6.85867 121.616 7.18867 121.77 7.46C121.931 7.73133 122.144 7.93667 122.408 8.076C122.672 8.21533 122.958 8.285 123.266 8.285C123.522 8.285 123.775 8.21533 124.025 8.076C124.274 7.93667 124.479 7.73133 124.641 7.46C124.802 7.18867 124.883 6.85867 124.883 6.47C124.883 6.08133 124.802 5.75133 124.641 5.48C124.479 5.20867 124.274 5.00333 124.025 4.864C123.775 4.72467 123.522 4.655 123.266 4.655C122.958 4.655 122.672 4.72467 122.408 4.864C122.144 5.00333 121.931 5.20867 121.77 5.48C121.616 5.75133 121.539 6.08133 121.539 6.47ZM128.241 7.02C128.241 7.42333 128.333 7.735 128.516 7.955C128.699 8.175 128.967 8.285 129.319 8.285C129.576 8.285 129.799 8.23367 129.99 8.131C130.188 8.021 130.338 7.87067 130.441 7.68C130.551 7.48933 130.606 7.26933 130.606 7.02V3.94H131.486V9H130.606V8.208C130.437 8.50867 130.228 8.736 129.979 8.89C129.73 9.03667 129.436 9.11 129.099 9.11C128.571 9.11 128.149 8.93033 127.834 8.571C127.519 8.21167 127.361 7.73133 127.361 7.13V3.94H128.241V7.02ZM135.098 9.11C134.629 9.11 134.211 9 133.844 8.78C133.485 8.55267 133.203 8.241 132.997 7.845C132.799 7.449 132.7 6.99067 132.7 6.47C132.7 5.942 132.803 5.48 133.008 5.084C133.221 4.688 133.514 4.38 133.888 4.16C134.27 3.94 134.71 3.83 135.208 3.83C135.707 3.83 136.132 3.93633 136.484 4.149C136.844 4.35433 137.119 4.65133 137.309 5.04C137.5 5.42867 137.595 5.89067 137.595 6.426C137.595 6.47733 137.592 6.53233 137.584 6.591C137.584 6.64233 137.584 6.67533 137.584 6.69H133.261V5.942H136.891L136.539 6.448C136.561 6.41133 136.583 6.35633 136.605 6.283C136.627 6.20233 136.638 6.13633 136.638 6.085C136.638 5.78433 136.576 5.524 136.451 5.304C136.334 5.084 136.169 4.91167 135.956 4.787C135.744 4.66233 135.494 4.6 135.208 4.6C134.871 4.6 134.581 4.67333 134.339 4.82C134.105 4.95933 133.921 5.16467 133.789 5.436C133.665 5.7 133.599 6.02633 133.591 6.415C133.591 6.811 133.654 7.14833 133.778 7.427C133.903 7.70567 134.086 7.91833 134.328 8.065C134.57 8.21167 134.864 8.285 135.208 8.285C135.553 8.285 135.857 8.21167 136.121 8.065C136.385 7.911 136.609 7.68 136.792 7.372L137.507 7.823C137.243 8.24833 136.91 8.571 136.506 8.791C136.11 9.00367 135.641 9.11 135.098 9.11ZM142.047 5.92C142.047 5.502 141.955 5.18667 141.772 4.974C141.588 4.76133 141.321 4.655 140.969 4.655C140.712 4.655 140.485 4.71 140.287 4.82C140.096 4.92267 139.946 5.06933 139.836 5.26C139.733 5.45067 139.682 5.67067 139.682 5.92V9H138.802V3.94H139.682V4.732C139.85 4.424 140.059 4.19667 140.309 4.05C140.565 3.90333 140.859 3.83 141.189 3.83C141.724 3.83 142.146 4.00967 142.454 4.369C142.769 4.721 142.927 5.20133 142.927 5.81V9H142.047V5.92ZM144.977 6.47C144.977 6.822 145.05 7.13367 145.197 7.405C145.351 7.67633 145.556 7.89267 145.813 8.054C146.077 8.208 146.374 8.285 146.704 8.285C146.975 8.285 147.228 8.24467 147.463 8.164C147.705 8.076 147.914 7.96233 148.09 7.823C148.266 7.67633 148.391 7.52233 148.464 7.361V8.461C148.288 8.66633 148.035 8.82767 147.705 8.945C147.382 9.055 147.049 9.11 146.704 9.11C146.213 9.11 145.769 8.99633 145.373 8.769C144.977 8.54167 144.662 8.23 144.427 7.834C144.2 7.43067 144.086 6.976 144.086 6.47C144.086 5.95667 144.2 5.502 144.427 5.106C144.662 4.71 144.977 4.39833 145.373 4.171C145.769 3.94367 146.213 3.83 146.704 3.83C147.049 3.83 147.382 3.88867 147.705 4.006C148.035 4.116 148.288 4.27367 148.464 4.479V5.579C148.391 5.41033 148.266 5.25633 148.09 5.117C147.914 4.97767 147.705 4.86767 147.463 4.787C147.228 4.699 146.975 4.655 146.704 4.655C146.374 4.655 146.077 4.732 145.813 4.886C145.556 5.04 145.351 5.25633 145.197 5.535C145.05 5.80633 144.977 6.118 144.977 6.47ZM151.792 9.11C151.322 9.11 150.904 9 150.538 8.78C150.178 8.55267 149.896 8.241 149.691 7.845C149.493 7.449 149.394 6.99067 149.394 6.47C149.394 5.942 149.496 5.48 149.702 5.084C149.914 4.688 150.208 4.38 150.582 4.16C150.963 3.94 151.403 3.83 151.902 3.83C152.4 3.83 152.826 3.93633 153.178 4.149C153.537 4.35433 153.812 4.65133 154.003 5.04C154.193 5.42867 154.289 5.89067 154.289 6.426C154.289 6.47733 154.285 6.53233 154.278 6.591C154.278 6.64233 154.278 6.67533 154.278 6.69H149.955V5.942H153.585L153.233 6.448C153.255 6.41133 153.277 6.35633 153.299 6.283C153.321 6.20233 153.332 6.13633 153.332 6.085C153.332 5.78433 153.269 5.524 153.145 5.304C153.027 5.084 152.862 4.91167 152.65 4.787C152.437 4.66233 152.188 4.6 151.902 4.6C151.564 4.6 151.275 4.67333 151.033 4.82C150.798 4.95933 150.615 5.16467 150.483 5.436C150.358 5.7 150.292 6.02633 150.285 6.415C150.285 6.811 150.347 7.14833 150.472 7.427C150.596 7.70567 150.78 7.91833 151.022 8.065C151.264 8.21167 151.557 8.285 151.902 8.285C152.246 8.285 152.551 8.21167 152.815 8.065C153.079 7.911 153.302 7.68 153.486 7.372L154.201 7.823C153.937 8.24833 153.603 8.571 153.2 8.791C152.804 9.00367 152.334 9.11 151.792 9.11ZM160.421 4.776C160.303 4.63667 160.149 4.47533 159.959 4.292C159.775 4.10133 159.61 3.88867 159.464 3.654C159.324 3.41933 159.255 3.16267 159.255 2.884C159.255 2.53933 159.335 2.23867 159.497 1.982C159.658 1.72533 159.878 1.52733 160.157 1.388C160.443 1.24867 160.769 1.179 161.136 1.179C161.524 1.179 161.854 1.25967 162.126 1.421C162.404 1.58233 162.617 1.795 162.764 2.059C162.91 2.31567 162.984 2.598 162.984 2.906C162.984 3.08933 162.947 3.269 162.874 3.445C162.8 3.621 162.694 3.797 162.555 3.973C162.415 4.14167 162.247 4.30667 162.049 4.468C161.851 4.622 161.623 4.776 161.367 4.93C161.169 5.04733 160.952 5.16833 160.718 5.293C160.483 5.41033 160.259 5.546 160.047 5.7C159.841 5.84667 159.673 6.019 159.541 6.217C159.409 6.415 159.343 6.65333 159.343 6.932C159.343 7.21067 159.412 7.45267 159.552 7.658C159.698 7.86333 159.893 8.021 160.135 8.131C160.377 8.241 160.644 8.296 160.938 8.296C161.29 8.296 161.627 8.219 161.95 8.065C162.28 7.911 162.595 7.70567 162.896 7.449C163.196 7.185 163.486 6.888 163.765 6.558C164.051 6.228 164.326 5.88333 164.59 5.524L165.272 5.953C164.978 6.33433 164.678 6.71567 164.37 7.097C164.062 7.471 163.732 7.80833 163.38 8.109C163.028 8.40967 162.646 8.65167 162.236 8.835C161.825 9.01833 161.374 9.11 160.883 9.11C160.465 9.11 160.065 9.02567 159.684 8.857C159.31 8.681 159.002 8.43533 158.76 8.12C158.525 7.79733 158.408 7.41967 158.408 6.987C158.408 6.66433 158.463 6.382 158.573 6.14C158.69 5.898 158.837 5.68533 159.013 5.502C159.196 5.31867 159.394 5.161 159.607 5.029C159.819 4.897 160.028 4.78333 160.234 4.688C160.439 4.58533 160.615 4.49367 160.762 4.413C161.172 4.17833 161.495 3.93267 161.73 3.676C161.972 3.412 162.093 3.15533 162.093 2.906C162.093 2.71533 162.052 2.55033 161.972 2.411C161.898 2.27167 161.792 2.16167 161.653 2.081C161.513 2.00033 161.341 1.96 161.136 1.96C160.835 1.96 160.6 2.04433 160.432 2.213C160.263 2.38167 160.179 2.60533 160.179 2.884C160.179 3.13333 160.278 3.37167 160.476 3.599C160.674 3.82633 160.883 4.06833 161.103 4.325L165.173 9H164.117L160.421 4.776ZM170.085 9V8.12H173.968V9H170.085ZM170.085 2.18V1.3H173.968V2.18H170.085ZM170.085 5.26V4.38H173.748V5.26H170.085ZM169.568 1.3H170.503V9H169.568V1.3ZM178.806 5.92C178.806 5.502 178.715 5.18667 178.531 4.974C178.348 4.76133 178.08 4.655 177.728 4.655C177.472 4.655 177.244 4.71 177.046 4.82C176.856 4.92267 176.705 5.06933 176.595 5.26C176.493 5.45067 176.441 5.67067 176.441 5.92V9H175.561V3.94H176.441V4.732C176.61 4.424 176.819 4.19667 177.068 4.05C177.325 3.90333 177.618 3.83 177.948 3.83C178.484 3.83 178.905 4.00967 179.213 4.369C179.529 4.721 179.686 5.20133 179.686 5.81V9H178.806V5.92ZM180.571 3.94H183.101V4.765H180.571V3.94ZM181.396 2.18H182.276V9H181.396V2.18ZM185.941 9.11C185.472 9.11 185.054 9 184.687 8.78C184.328 8.55267 184.046 8.241 183.84 7.845C183.642 7.449 183.543 6.99067 183.543 6.47C183.543 5.942 183.646 5.48 183.851 5.084C184.064 4.688 184.357 4.38 184.731 4.16C185.113 3.94 185.553 3.83 186.051 3.83C186.55 3.83 186.975 3.93633 187.327 4.149C187.687 4.35433 187.962 4.65133 188.152 5.04C188.343 5.42867 188.438 5.89067 188.438 6.426C188.438 6.47733 188.435 6.53233 188.427 6.591C188.427 6.64233 188.427 6.67533 188.427 6.69H184.104V5.942H187.734L187.382 6.448C187.404 6.41133 187.426 6.35633 187.448 6.283C187.47 6.20233 187.481 6.13633 187.481 6.085C187.481 5.78433 187.419 5.524 187.294 5.304C187.177 5.084 187.012 4.91167 186.799 4.787C186.587 4.66233 186.337 4.6 186.051 4.6C185.714 4.6 185.424 4.67333 185.182 4.82C184.948 4.95933 184.764 5.16467 184.632 5.436C184.508 5.7 184.442 6.02633 184.434 6.415C184.434 6.811 184.497 7.14833 184.621 7.427C184.746 7.70567 184.929 7.91833 185.171 8.065C185.413 8.21167 185.707 8.285 186.051 8.285C186.396 8.285 186.7 8.21167 186.964 8.065C187.228 7.911 187.452 7.68 187.635 7.372L188.35 7.823C188.086 8.24833 187.753 8.571 187.349 8.791C186.953 9.00367 186.484 9.11 185.941 9.11ZM190.524 3.94V9H189.644V3.94H190.524ZM192.053 4.908C191.936 4.82 191.83 4.75767 191.734 4.721C191.639 4.677 191.518 4.655 191.371 4.655C191.151 4.655 190.979 4.71 190.854 4.82C190.73 4.93 190.642 5.08033 190.59 5.271C190.546 5.46167 190.524 5.678 190.524 5.92H190.128C190.128 5.51667 190.198 5.161 190.337 4.853C190.484 4.53767 190.671 4.28833 190.898 4.105C191.126 3.92167 191.357 3.83 191.591 3.83C191.775 3.83 191.943 3.85567 192.097 3.907C192.259 3.951 192.405 4.04267 192.537 4.182L192.053 4.908ZM4.825 14.85C4.825 14.6813 4.88367 14.5383 5.001 14.421C5.12567 14.3037 5.26867 14.245 5.43 14.245C5.59867 14.245 5.74167 14.3037 5.859 14.421C5.97633 14.5383 6.035 14.6813 6.035 14.85C6.035 15.0113 5.97633 15.1543 5.859 15.279C5.74167 15.3963 5.59867 15.455 5.43 15.455C5.26867 15.455 5.12567 15.3963 5.001 15.279C4.88367 15.1543 4.825 15.0113 4.825 14.85ZM4.99 16.94H5.87V22H4.99V16.94ZM10.9274 18.92C10.9274 18.502 10.8358 18.1867 10.6524 17.974C10.4691 17.7613 10.2014 17.655 9.84942 17.655C9.59276 17.655 9.36542 17.71 9.16742 17.82C8.97676 17.9227 8.82642 18.0693 8.71642 18.26C8.61376 18.4507 8.56242 18.6707 8.56242 18.92V22H7.68242V16.94H8.56242V17.732C8.73109 17.424 8.94009 17.1967 9.18942 17.05C9.44609 16.9033 9.73942 16.83 10.0694 16.83C10.6048 16.83 11.0264 17.0097 11.3344 17.369C11.6498 17.721 11.8074 18.2013 11.8074 18.81V22H10.9274V18.92ZM15.9896 16.94H18.5196V17.765H15.9896V16.94ZM16.8146 15.18H17.6946V22H16.8146V15.18ZM20.2821 13.42V22H19.4021V13.42H20.2821ZM22.6471 18.92C22.6471 18.502 22.5555 18.1867 22.3721 17.974C22.1961 17.7613 21.9285 17.655 21.5691 17.655C21.3125 17.655 21.0851 17.71 20.8871 17.82C20.6965 17.93 20.5461 18.0803 20.4361 18.271C20.3335 18.4617 20.2821 18.678 20.2821 18.92H19.9961C19.9961 18.5167 20.0731 18.161 20.2271 17.853C20.3811 17.5377 20.5901 17.2883 20.8541 17.105C21.1255 16.9217 21.4371 16.83 21.7891 16.83C22.1411 16.83 22.4455 16.9033 22.7021 17.05C22.9661 17.1967 23.1678 17.4167 23.3071 17.71C23.4538 18.0033 23.5271 18.37 23.5271 18.81V22H22.6471V18.92ZM27.1394 22.11C26.6701 22.11 26.2521 22 25.8854 21.78C25.5261 21.5527 25.2438 21.241 25.0384 20.845C24.8404 20.449 24.7414 19.9907 24.7414 19.47C24.7414 18.942 24.8441 18.48 25.0494 18.084C25.2621 17.688 25.5554 17.38 25.9294 17.16C26.3108 16.94 26.7508 16.83 27.2494 16.83C27.7481 16.83 28.1734 16.9363 28.5254 17.149C28.8848 17.3543 29.1598 17.6513 29.3504 18.04C29.5411 18.4287 29.6364 18.8907 29.6364 19.426C29.6364 19.4773 29.6328 19.5323 29.6254 19.591C29.6254 19.6423 29.6254 19.6753 29.6254 19.69H25.3024V18.942H28.9324L28.5804 19.448C28.6024 19.4113 28.6244 19.3563 28.6464 19.283C28.6684 19.2023 28.6794 19.1363 28.6794 19.085C28.6794 18.7843 28.6171 18.524 28.4924 18.304C28.3751 18.084 28.2101 17.9117 27.9974 17.787C27.7848 17.6623 27.5354 17.6 27.2494 17.6C26.9121 17.6 26.6224 17.6733 26.3804 17.82C26.1458 17.9593 25.9624 18.1647 25.8304 18.436C25.7058 18.7 25.6398 19.0263 25.6324 19.415C25.6324 19.811 25.6948 20.1483 25.8194 20.427C25.9441 20.7057 26.1274 20.9183 26.3694 21.065C26.6114 21.2117 26.9048 21.285 27.2494 21.285C27.5941 21.285 27.8984 21.2117 28.1624 21.065C28.4264 20.911 28.6501 20.68 28.8334 20.372L29.5484 20.823C29.2844 21.2483 28.9508 21.571 28.5474 21.791C28.1514 22.0037 27.6821 22.11 27.1394 22.11ZM34.9654 13.42V22H34.0854V13.42H34.9654ZM39.2004 19.47C39.2004 20.0127 39.0868 20.482 38.8594 20.878C38.6321 21.274 38.3278 21.5783 37.9464 21.791C37.5724 22.0037 37.1544 22.11 36.6924 22.11C36.2744 22.11 35.9041 22.0037 35.5814 21.791C35.2661 21.5783 35.0168 21.274 34.8334 20.878C34.6574 20.482 34.5694 20.0127 34.5694 19.47C34.5694 18.92 34.6574 18.4507 34.8334 18.062C35.0168 17.666 35.2661 17.3617 35.5814 17.149C35.9041 16.9363 36.2744 16.83 36.6924 16.83C37.1544 16.83 37.5724 16.9363 37.9464 17.149C38.3278 17.3617 38.6321 17.666 38.8594 18.062C39.0868 18.4507 39.2004 18.92 39.2004 19.47ZM38.3094 19.47C38.3094 19.0813 38.2288 18.7513 38.0674 18.48C37.9134 18.2087 37.7044 18.0033 37.4404 17.864C37.1838 17.7247 36.8978 17.655 36.5824 17.655C36.3258 17.655 36.0728 17.7247 35.8234 17.864C35.5741 18.0033 35.3688 18.2087 35.2074 18.48C35.0461 18.7513 34.9654 19.0813 34.9654 19.47C34.9654 19.8587 35.0461 20.1887 35.2074 20.46C35.3688 20.7313 35.5741 20.9367 35.8234 21.076C36.0728 21.2153 36.3258 21.285 36.5824 21.285C36.8978 21.285 37.1838 21.2153 37.4404 21.076C37.7044 20.9367 37.9134 20.7313 38.0674 20.46C38.2288 20.1887 38.3094 19.8587 38.3094 19.47ZM39.9739 19.47C39.9739 18.9567 40.0875 18.502 40.3149 18.106C40.5495 17.71 40.8649 17.3983 41.2609 17.171C41.6569 16.9437 42.1005 16.83 42.5919 16.83C43.0905 16.83 43.5342 16.9437 43.9229 17.171C44.3189 17.3983 44.6305 17.71 44.8579 18.106C45.0925 18.502 45.2099 18.9567 45.2099 19.47C45.2099 19.976 45.0925 20.4307 44.8579 20.834C44.6305 21.23 44.3189 21.5417 43.9229 21.769C43.5342 21.9963 43.0905 22.11 42.5919 22.11C42.1005 22.11 41.6569 21.9963 41.2609 21.769C40.8649 21.5417 40.5495 21.23 40.3149 20.834C40.0875 20.4307 39.9739 19.976 39.9739 19.47ZM40.8649 19.47C40.8649 19.822 40.9382 20.1337 41.0849 20.405C41.2389 20.6763 41.4442 20.8927 41.7009 21.054C41.9649 21.208 42.2619 21.285 42.5919 21.285C42.9219 21.285 43.2152 21.208 43.4719 21.054C43.7359 20.8927 43.9412 20.6763 44.0879 20.405C44.2419 20.1337 44.3189 19.822 44.3189 19.47C44.3189 19.118 44.2419 18.8063 44.0879 18.535C43.9412 18.2563 43.7359 18.04 43.4719 17.886C43.2152 17.732 42.9219 17.655 42.5919 17.655C42.2619 17.655 41.9649 17.732 41.7009 17.886C41.4442 18.04 41.2389 18.2563 41.0849 18.535C40.9382 18.8063 40.8649 19.118 40.8649 19.47ZM48.9526 16.94H49.9426L48.2156 19.393L50.0526 22H49.0626L47.7426 20.086L46.4226 22H45.4326L47.2696 19.393L45.5426 16.94H46.5326L47.7426 18.7L48.9526 16.94ZM52.6736 22.11C52.2043 22.11 51.7863 22 51.4196 21.78C51.0603 21.5527 50.778 21.241 50.5726 20.845C50.3746 20.449 50.2756 19.9907 50.2756 19.47C50.2756 18.942 50.3783 18.48 50.5836 18.084C50.7963 17.688 51.0896 17.38 51.4636 17.16C51.845 16.94 52.285 16.83 52.7836 16.83C53.2823 16.83 53.7076 16.9363 54.0596 17.149C54.419 17.3543 54.694 17.6513 54.8846 18.04C55.0753 18.4287 55.1706 18.8907 55.1706 19.426C55.1706 19.4773 55.167 19.5323 55.1596 19.591C55.1596 19.6423 55.1596 19.6753 55.1596 19.69H50.8366V18.942H54.4666L54.1146 19.448C54.1366 19.4113 54.1586 19.3563 54.1806 19.283C54.2026 19.2023 54.2136 19.1363 54.2136 19.085C54.2136 18.7843 54.1513 18.524 54.0266 18.304C53.9093 18.084 53.7443 17.9117 53.5316 17.787C53.319 17.6623 53.0696 17.6 52.7836 17.6C52.4463 17.6 52.1566 17.6733 51.9146 17.82C51.68 17.9593 51.4966 18.1647 51.3646 18.436C51.24 18.7 51.174 19.0263 51.1666 19.415C51.1666 19.811 51.229 20.1483 51.3536 20.427C51.4783 20.7057 51.6616 20.9183 51.9036 21.065C52.1456 21.2117 52.439 21.285 52.7836 21.285C53.1283 21.285 53.4326 21.2117 53.6966 21.065C53.9606 20.911 54.1843 20.68 54.3676 20.372L55.0826 20.823C54.8186 21.2483 54.485 21.571 54.0816 21.791C53.6856 22.0037 53.2163 22.11 52.6736 22.11ZM56.5858 20.449C56.6884 20.603 56.8058 20.746 56.9378 20.878C57.0698 21.01 57.2201 21.1163 57.3888 21.197C57.5648 21.2703 57.7554 21.307 57.9608 21.307C58.2101 21.307 58.4044 21.252 58.5438 21.142C58.6904 21.0247 58.7638 20.867 58.7638 20.669C58.7638 20.493 58.7051 20.3463 58.5878 20.229C58.4778 20.1043 58.3348 20.0017 58.1588 19.921C57.9828 19.833 57.7958 19.7523 57.5978 19.679C57.3778 19.591 57.1541 19.4883 56.9268 19.371C56.7068 19.2463 56.5198 19.0887 56.3658 18.898C56.2191 18.7 56.1458 18.4543 56.1458 18.161C56.1458 17.8603 56.2228 17.611 56.3768 17.413C56.5381 17.215 56.7434 17.0683 56.9928 16.973C57.2494 16.8777 57.5134 16.83 57.7848 16.83C58.0561 16.83 58.3091 16.874 58.5438 16.962C58.7858 17.05 58.9984 17.1673 59.1818 17.314C59.3651 17.4607 59.5081 17.6293 59.6108 17.82L58.9068 18.271C58.7674 18.0803 58.5914 17.9227 58.3788 17.798C58.1734 17.6733 57.9388 17.611 57.6748 17.611C57.4914 17.611 57.3338 17.6513 57.2018 17.732C57.0698 17.8127 57.0038 17.9373 57.0038 18.106C57.0038 18.238 57.0551 18.3553 57.1578 18.458C57.2604 18.5607 57.3924 18.6523 57.5538 18.733C57.7151 18.8137 57.8838 18.8907 58.0598 18.964C58.3531 19.0813 58.6208 19.2097 58.8628 19.349C59.1048 19.481 59.2954 19.6423 59.4348 19.833C59.5814 20.0237 59.6548 20.2693 59.6548 20.57C59.6548 21.01 59.4934 21.3767 59.1708 21.67C58.8554 21.9633 58.4374 22.11 57.9168 22.11C57.5794 22.11 57.2751 22.0513 57.0038 21.934C56.7324 21.8093 56.5014 21.6517 56.3108 21.461C56.1274 21.2703 55.9881 21.076 55.8928 20.878L56.5858 20.449ZM61.0333 21.56C61.0333 21.3913 61.0919 21.2483 61.2093 21.131C61.3339 21.0137 61.4769 20.955 61.6383 20.955C61.8069 20.955 61.9499 21.0137 62.0673 21.131C62.1846 21.2483 62.2433 21.3913 62.2433 21.56C62.2433 21.7213 62.1846 21.8643 62.0673 21.989C61.9499 22.1063 61.8069 22.165 61.6383 22.165C61.4769 22.165 61.3339 22.1063 61.2093 21.989C61.0919 21.8643 61.0333 21.7213 61.0333 21.56Z"
        fill="white"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default GameOneSubTitle;